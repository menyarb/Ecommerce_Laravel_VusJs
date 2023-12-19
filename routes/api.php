<?php
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\ScategorieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('api')->group(function () {
    Route::resource('categories', CategorieController::class);
    });
    Route::middleware('api')->group(function($router) {

        Route::post('/createpayment', [PaymentController::class,
        
        'createPaymentIntent']);
        
        });
    
    Route::middleware('api')->group(function () {
        Route::resource('scategories', 
        ScategorieController::class); 
        });
        Route::get('/scat/{idcat}', 
        [ScategorieController::class,'showSCategorieByCAT']);
        Route::middleware('api')->group(function () {
            Route::resource('articles', ArticleController::class);
            });
            Route::post('/login', [LoginController::class, 'login']);
            Route::post('/register', [RegisterController::class, 'register']);
            Route::middleware('auth:sanctum')->post('/logout', [LoginController::class,'logout']);
            