AUDroid
=======

Alternate UI Designer for Android is a set of Java and Javascript libraries that enables you to build your android interfaces with HTML + CSS

What is this?
-------------

This is the end of your frustating times with android default XML designer. We all at osme point get tired of trying to position the things as we need, trying to make the UI look good in every kind of screen and soo and so. And when it get the maximum, stuff like AUDroid appears !!

In basic English, AUDroid is a set of libraries

1. Java library to handle android intergration
2. Javascript library to handle HTML intergration

How it works?
-------------

NO ROCKET SCIENCE INVOLVED ! surprise or well no surprise if you already knew about the WebView widget of Android.

1. Your whole interface will be a HTML page (of course with CSS)
2. All your events like click,change,mouseover,keypress bla bla are bound by a simple javascript code
3. Your activity layout will consist ONLY a single web view
4. It will load your HTML page as the layout
5. The Java library will make an interface between the javascript event binds and the actual app functions of android
6. It's still confusing but it will make sense once you start using it :)


Project done using AUDroid + Bootstrap for responsive behaviour
---------------------------------------------------------------

![alt tag](https://lh5.googleusercontent.com/-IK9YW10tX44/Up8nMYF2bOI/AAAAAAAAAuQ/X6iBSuTtWto/w879-h562-no/lp1.png)
![alt tag](https://lh4.googleusercontent.com/-zyPv_WIzbaI/Up8nM4BLH9I/AAAAAAAAAuU/xKVrfE8L-88/w626-h562-no/lp2.png)

USAGE
=====

Designing your HTML page
------------------------

First you need your HTML page to desgined, which would be your app interface.You can desgin what ever you need, the only requirement is that you include jQuery [>1.0] and audroid javascript libraries to it.

Lets say

*index.html*
```html
<!DOCTYPE html>
<html>
<head>
        <script type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="audroid.js"></script>
</head>
<body>
	<input type="button" value="test" />
	<input type="text" value="" id="mytext" class="txt" /><br />
	<select>
		<option>one</option>
		<option>two</option>
	</select>
</body>
</html>
```

A simple page consisting of a button,textbox and a combo box

Building the Android App
------------------------

1. I'll skip the New Project -> Add Activity stuff, right upto how to use this
2. Add a new layout to your project
3. Now add your whole site [in our case index.html] to **assests** folder if your project
4. Add a WebView widget to it and wrap it full on the layout
5. Lets give its id as *@+id/wb*
6. First add the **audroid.jar** library to your project
7. Import **org.zzl.zontek.android.audroid**
8. First we need a new instance of Audroid class and get the WebView
9. Now we can select a HTML element [just like in javascript] by using one of the selector functions of AUDroid. Audroid have 3 types of selector functions
findByID(String id)
findByName(String name)
findByTag(String tag)
You are free to use any of these and the priority of execution is in the descending order
10. When you use a selector function is returns you a *DomElement*
11. To bind and event to a given dom element you should call the **bind(String event,DomEvent func)** method of DomElement
12. **DomEvent** is merely an interface in which you can define the actual android action needed to done. [In similar to the On<event>Listener of android Widget]
13. Each element should be selected before binding an event
14. Once those are done, simple load the required page 

```java
//First obtain the WebView control
WebView wb = (WebView) findViewById(R.id.wb);

//Make new instance of Audroid
Audroid aud = new Audroid(this,wb);

/Lets select the button and textbox from above page
DomElement btn = aud.findByID("test");
DomElement txt = aud.findByName("user");

//binding the click event function to button
btn.bind("click",new DomEvent(){
    @override
    public void performEvent(){
        Toast.makeText(getApplicationContext(), "Button click", Toast.LENGTH_LONG).show();
    }
});

//bind the change event of textbox
txt.bind("change",new DomEvent(){
    @override
    public void performEvent(){
        Toast.makeText(getApplicationContext(), "Text Changed", Toast.LENGTH_LONG).show();
    }
});

//now load the page
wb.loadUrl("file:///android_asset/index.html");
```

***The library supports ALL events supported by the bind() method of jQuery***

YEY !! Ready to run :D

Now you have a fully HTML+CSS driven interface for your Android app and NO FRAMEWORKS involved!

To really make this work i suggest using a responsive css framework [like Bootstrap] which will greatly enhance your life.

This guide is missing alot at the moment, but enough to get you buiding, so please do put your questions,comments and suggestions over to my contacts


@email : manujith.nc@gmail.com

@twitter : @\_manzzup\_

@blog  : http://manzzup.blogspot.com





