function conv(){
	var d=document.getElementById("input").value
	if (document.getElementById("cap").value!=""){
		d=d.split(" ")
		for (var w=0;w<d.length;w++){
			if (d[w].startsWith(document.getElementById("cap").value.toLowerCase())){
				d[w]=d[w].replace(document.getElementById("cap").value.toLowerCase(),`<b>${document.getElementById("cap").value.toLowerCase()}</b>`)
			}
			if (d[w].startsWith(document.getElementById("cap").value.toUpperCase())){
				d[w]=d[w].replace(document.getElementById("cap").value.toUpperCase(),`<b>${document.getElementById("cap").value.toUpperCase()}</b>`)
			}
		}
		d=d.join(" ")
	}
	if (document.getElementById("bold").checked){
		document.getElementById("output").innerHTML=d.split("u").join("<u><b>u</b></u>").split("a").join("<u><b>a</b></u>").split("e").join("<u><b>e</b></u>").split("o").join("<u><b>o</b></u>").split("i").join("<u><b>i</b></u>").split("y").join("<u><b>y</b></u>").split("Ã³").join("<u><b>Ã³</b></u>").split("Ä…").join("<u><b>Ä…</b></u>").split("Ä™").join("<u><b>Ä™</b></u>").split("U").join("<u><b>U</b></u>").split("A").join("<u><b>A</b></u>").split("E").join("<u><b>E</b></u>").split("O").join("<u><b>O</b></u>").split("I").join("<u><b>I</b></u>").split("Y").join("<u><b>Y</b></u>").split("Ã“").join("<u><b>Ã“</b></u>").split("Ä„").join("<u><b>Ä„</b></u>").split("Ä˜").join("<u><b>Ä˜</b></u>").split("\n").join("<br>")
	}
	else{
		document.getElementById("output").innerHTML=d.split("u").join("<u>u</u>").split("a").join("<u>a</u>").split("e").join("<u>e</u>").split("o").join("<u>o</u>").split("i").join("<u>i</u>").split("y").join("<u>y</u>").split("Ã³").join("<u>Ã³</u>").split("Ä…").join("<u>Ä…</u>").split("Ä™").join("<u>Ä™</u>").split("U").join("<u>U</u>").split("A").join("<u>A</u>").split("E").join("<u>E</u>").split("O").join("<u>O</u>").split("I").join("<u>I</u>").split("Y").join("<u>Y</u>").split("Ã“").join("<u>Ã“</u>").split("Ä„").join("<u>Ä„</u>").split("Ä˜").join("<u>Ä˜</u>").split("\n").join("<br>")
	}
}