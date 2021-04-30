<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Passport\HasApiTokens;
use Laravel\Passport\TokenRepository;
use Laravel\Passport\RefreshTokenRepository;
use Auth;

class UserController extends Controller
{
    //REGISTER USER//

    public function createUser(Request $request){

        $response = "";

        //Getting data from request
        $data = $request->getContent();

        //Verify data exists
        $data = json_decode($data);

        if($data!=""){
            //TODO: validate user input data 
            if($data){

                //Create user
                $user = new User();


                //Required data
                $user->name_user = $data->username;
                $user->password_user = Hash::make($data->password);
                $user->email_user = $data->email;
                //Save user
                try{

                    $user->save();

                    $response = "OK. Data saved";
                }catch(\Exception $e){
                    $response = $e->getMessage();
                }

            }

        }else{
            $response = "Wrong data";
        }
        


        return response($response);
    }

    //LOGIN USER//

    public function loginUser(Request $request){

        $response = "";

        //Getting data from request
        $data = $request->getContent();

        //Verify data exists
        $data = json_decode($data);

       //Get password from username
        $hashedPassword = User::where('email_user', $data->email)->value('password_user');
        //Password from response
        $responsePassword = $data->password;
        //Find what ID the user has based on his username
        $userLoggedId = User::where('email_user',$data->email)->value('id');
        $userLogged=User::find($userLoggedId);

        if($data!=""){
            //TODO: validate user input data 
            if($data){

                //Check if user and password exists in the database
                if (User::where('email_user', '=', $data->email)->exists() && Hash::check($responsePassword , $hashedPassword)) {

                    //Token from laravel passport
                 $token = $userLogged->createToken('contacts')->accessToken;
                   //Put laravel passport token into username token field
                 $userLogged->api_token = $token;
                 $userLogged->save();
                 $userName = User::where('email_user', $data->email)->value('name_user');
                    //The token is needed in order to access the system
                 return response()->json([

                    'respuesta' => 'Logged as'." ".$userName,

                    'token'=>$token,
                    'id'=>$userLogged->id
                ]);     

             }else{
                return 'Username or password are incorrect';
            }

        }else{
            $response = "Wrong data input";
        }
        
    }}



    public function logoutUser(Request $request){

        $response = "";

            //Getting data from request
        $data = $request->getContent();
        
            //Verify data exists
        $data = json_decode($data);
        

        if($data){

            $user = User::find($data->id);

            if($user){

                $user->api_token = NULL;

                try{
                    $user->save();

                    $response = "OK, user logged out";

                }catch(\Exception $e){
                    $response = $e->getMessage();
                }
            }else{

                $response = "NO";
            }
        }else{

                $response = "User not found";
            }
   // return response($response);
    return response($response);
    }

    public function editUser(Request $request,$id){

      $respuesta = "";

		//Check if user exists
      $user = User::find($id);

      if($user){

        $datos = $request->getContent();
        $datos = json_decode($datos);

        if($datos){

                //Check if values exists on request
            if(isset($datos->estado)){
               $user->email_user = $datos->email;
           }
            if(isset($datos->estado)){
               $user->email_user = $datos->email;
           }
            if(isset($datos->estado)){
               $user->email_user = $datos->email;
           }

				//Save user
           try{

               $user->save();

               $respuesta = "OK";
           }catch(\Exception $e){
               $respuesta = $e->getMessage();
           }
       }else{
        $respuesta = "Incorrect data";
    }
}else{
 $response = "User not found";
}

return response($respuesta);
}
}