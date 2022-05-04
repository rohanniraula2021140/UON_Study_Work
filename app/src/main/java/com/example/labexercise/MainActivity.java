package com.example.labexercise;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    EditText ETUserName, ETPassWord;
    Button BtnValidate;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ETUserName = findViewById(R.id.idETUserName);
        ETPassWord = findViewById(R.id.idETPassWord);
        BtnValidate = findViewById(R.id.idBtnValidate);

        BtnValidate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(ETUserName.getText().toString().equals("admin") && ETPassWord.getText().toString().equals("admin")){
                    Intent intent = new Intent(MainActivity.this, Welcome.class);
                    startActivity(intent);
                }else{
                    Toast.makeText(MainActivity.this, "Incorrect UserName and Password", Toast.LENGTH_SHORT).show();
                }
            }
        });
    }
}