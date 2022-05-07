package com.example.labexercise;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageButton;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{
    Button oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn, zeroBtn, dotButton,
            divideBtn, productBtn, addBtn, subBtn;
    ImageButton equalIBtn;
    TextView displayTV;
    String TAG = "rohanbhai";

    static String question = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        oneBtn = findViewById(R.id.idBtn1);
        twoBtn = findViewById(R.id.idBtn2);
        threeBtn = findViewById(R.id.idBtn3);
        fourBtn = findViewById(R.id.idBtn4);
        fiveBtn = findViewById(R.id.idBtn5);
        sixBtn = findViewById(R.id.idBtn6);
        sevenBtn = findViewById(R.id.idBtn7);
        eightBtn = findViewById(R.id.idBtn8);
        nineBtn = findViewById(R.id.idBtn9);
        zeroBtn = findViewById(R.id.idBtn0);
        dotButton = findViewById(R.id.idBtnDot);
        addBtn = findViewById(R.id.idBtnAdd);
        divideBtn = findViewById(R.id.idBtnDivide);
        productBtn = findViewById(R.id.idBtnMultiply);
        subBtn = findViewById(R.id.idBtnSub);
        equalIBtn = findViewById(R.id.idIBEqual);
        displayTV = findViewById(R.id.idTVCalculatorET);
        Button[] allButton = {oneBtn, twoBtn, threeBtn, fourBtn, fiveBtn, sixBtn, sevenBtn, eightBtn, nineBtn, zeroBtn, dotButton,
                divideBtn, productBtn, addBtn, subBtn};

        for (int i = 0; i < allButton.length; i++) {
            allButton[i].setOnClickListener(this::onClick);
        }
        equalIBtn.setOnClickListener(this::onClick);
        equalIBtn.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View view) {
                question = "";
                displayInLed(question);
                return false;
            }
        });

    }


    @Override
    public void onClick(View view) {
        if(view == oneBtn) {
            question += ("1");
        }
        else if(view == twoBtn) {
            question += ("2");
        }
        else if(view == threeBtn) {
            question += ("3");
        }
        else if(view == fourBtn) {
            question += ("4");
        }
        else if(view == fiveBtn) {
            question += ("5");
        }
        else if(view == sixBtn) {
            question += ("6");
        }
        else if(view == sevenBtn) {
            question += ("7");
        }
        else if(view == eightBtn) {
            question += ("8");
        }
        else if(view == nineBtn) {
            question += ("9");
        }
        else if(view == zeroBtn) {
            question += ("0");
        }
        else if(view == addBtn) {
            question += (" + ");
        }
        else if(view == subBtn) {
            question += (" - ");
        }
        else if(view == productBtn) {
            question += (" * ");
        }
        else if(view == divideBtn) {
            question += (" / ");
        }
        else if(view == equalIBtn) {
            question += (" ");
            double result = processResult(question);

            displayInLed(String.valueOf(result));
            return;
        }

        displayInLed(question);
    }

    private double processResult(String statement) {
        String mixItem[] = statement.split(" ");
        char nextOperation = '+';
        double result = 0;
        for(String item: mixItem){
            try{
                if(item.equals("+")) {
                    nextOperation = '+';
                }else if(item.equals("-")) {
                    nextOperation = '-';
                }else if(item.equals("/")) {
                    nextOperation = '/';
                }else if(item.equals("*")) {
                    nextOperation = '*';
                }else{
                    Log.d(TAG, "processResult: operation " +item + "item" + nextOperation);
                    switch(nextOperation){
                        case '+':
                            result += Double.parseDouble(item);
                            break;
                        case '-':
                            result -= Double.parseDouble(item);
                            break;
                        case '*':
                            result *= Double.parseDouble(item);
                            break;
                        case '/':
                            result /= Double.parseDouble(item);
                            break;
                        default:
                            break;
                    }
                }
                Log.d(TAG, "processResult: " + result);
            }catch (NumberFormatException e){
//                Toast.makeText(this, "Invalid statement" + result, Toast.LENGTH_SHORT).show();
                e.printStackTrace();
            }

        }
        return result;
    }

    void displayInLed(String text){
//        Log.d(TAG, "displayInLed: " + text);
        displayTV.setText(text);
    }

}