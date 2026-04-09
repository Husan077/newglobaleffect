<?php

namespace App\Http\Controllers\Site;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Clients;
use Telegram\Bot\Laravel\Facades\Telegram;

class SustavoilController extends Controller
{
    public function index(Request $request, $id)
    {
        if ($request->method() == 'POST') {
            return $this->postIndex($request, $id);
        }
        return view('site.sustavoil.sustavoil', ['id' => $id]);
    }


    public function postIndex(Request $request, $id)
    {

        $telegram_id='-1002005754333';

        $valid = $request->validate([
            'phone' => 'required|min:8',
            'name' => 'required',
        ]);

        $operator = (int) $id;

        $controllerName = 'Оператор ' . $operator;

        $data = [
            'name' => $request->name,
            'phone' => $request->phone,
            'operator_name' => $controllerName,
            'product_name' => 'Sustavoil ' . $operator . ' Сайт',
        ];

        if ($valid) {
            Clients::create($data);
        }

        $userIP = $request->ip();

        $messageText = "<b>Sustavoil $operator сайт</b>\n"
            . "\n"
            . "<b>Ism</b>: {$request->name}\n"
            . "<b>Raqam</b>: {$request->phone}\n"
            . "<b>IP</b>: $userIP\n";

        Telegram::sendMessage([
            'chat_id' => env($telegram_id, $telegram_id),
            'parse_mode' => 'HTML',
            'text' => $messageText,
        ]);

        return redirect()->to('congratulations');
    }
}
