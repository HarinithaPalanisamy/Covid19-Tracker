var ht=new XMLHttpRequest();
            var url1="https://api.covid19api.com/world/total";
            ht.onreadystatechange=function(){
                if(this.readyState==4 && this.status==200)
                {
                    var myar=JSON.parse(this.responseText);
                    document.getElementById("app").innerHTML="Total Death="+myar.TotalDeaths;
                }
            }
            ht.open('GET',url1,true);
            ht.send();
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.covid19api.com/summary";
            //var url="samjson.json";
            function perform(){
            xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                //document.writeln("hi");
                var myArr = JSON.parse(this.responseText);
                myFunction(myArr);
              }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            }
            function myFunction(arr) {
              var out = "<table><tr><th>Country</th><th>Total Deaths</th><th>New Confirmed</th><th>Total Confirmed</th></tr>";
              var i;
              var z=document.getElementById("cou").value;
              //document.writeln(arr.Countries.length);
              for(i = 0; i < arr.Countries.length; i++) {
                if(arr.Countries[i].Country==z)
                out += "<tr><td>"+ arr.Countries[i].Country +' </td><td>'+arr.Countries[i].TotalDeaths+ '</td><td>'+arr.Countries[i].NewConfirmed+'</td><td>'+arr.Countries[i].TotalConfirmed+'</td></tr>';
              }
              out+='</table>';
              document.getElementById("id01").innerHTML = out;
            }
            
