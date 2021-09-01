package com.example.lengthunitconverter

import androidx.appcompat.app.AppCompatActivity
import android.widget.EditText
import android.widget.TextView
import android.os.Bundle
import android.view.View
import android.widget.Button
import com.example.lengthunitconverter.R

class MainActivity : AppCompatActivity() {
    lateinit var m: EditText
    lateinit var km: TextView
    lateinit var cm: TextView
    lateinit var convert: Button
    lateinit var k: String
    lateinit var c: String
    lateinit var met: String
    var mt = 0.0
    var kmt = 0.0
    var cmt = 0.0
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        m = findViewById(R.id.metres)
        km = findViewById(R.id.km)
        cm = findViewById(R.id.cm)
        convert = findViewById(R.id.button)

        convert.setOnClickListener(View.OnClickListener {
            met = m.getText().toString().trim { it <= ' ' }
            mt = met.toDouble()
            kmt = mt / 1000
            cmt = mt * 100
            k = kmt.toString()
            k = "kilometers : $k"
            c = cmt.toString()
            c = "centimeters : $c"
            km.setText(k)
            cm.setText(c)
        })
    }
}