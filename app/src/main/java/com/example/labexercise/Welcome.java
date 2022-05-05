package com.example.labexercise;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.TextView;

public class Welcome extends AppCompatActivity {
    final static String FULL_NAME = "fullName";
    final static String PASSWORD = "password";
    final static String ADDRESS = "address";
    final static String EMAIL = "email";
    TextView TVMessage;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);
        String fullName, password, address, email;
        fullName = getIntent().getStringExtra(FULL_NAME);
        password = getIntent().getStringExtra(PASSWORD);
        address = getIntent().getStringExtra(ADDRESS);
        email = getIntent().getStringExtra(EMAIL);
        TVMessage = findViewById(R.id.idTVDetail);
        String message = "FullName : " + fullName
                        +"\nPassword: " + password
                        +"\nAddress: " + address
                        +"\nEmail: " + email;
        TVMessage.setText(message);



    }
}