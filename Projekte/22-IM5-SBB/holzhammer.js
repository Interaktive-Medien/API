document.querySelector("#staedte").innerHTML +=
                    "<li onclick='wechsleStadt(" + '"' + data[index].city + '"' + ")'>" +
                    data[index].name + "</li>"