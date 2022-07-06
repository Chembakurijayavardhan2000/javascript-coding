+<!DOCTYPE html>
+<html>
+  <body>
+    <h2>Q2 call() and apply()</h2>
+
+    <p id="demo"></p>
+
+    <script>
+      const person = {
+        fullName: function (city, country) {
+          return (
+            this.firstName + " " + this.lastName + ", " + city + ", " + country
+          );
+        },
+      };
+
+      const person1 = {
+        firstName: "Rahul",
+        lastName: "K",
+      };
+      // difference b/w call and apply is that apply treats it as an array where as call won't
+      document.getElementById("demo").innerHTML = person.fullName.apply(
+        person1,
+        ["Hyd", "India"]
+      );
+      document.getElementById("demo").innerHTML = person.fullName.call(
+        person1,
+        "Hyd",
+        "India"
+      );
+    </script>
+  </body>
+</html>