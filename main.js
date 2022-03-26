window.addEventListener("load",function () {
  if (navigator.onLine == true) {
    document.getElementById("online").style.display = "flex";
    var item_father = document.getElementById("item_father");
    var item_len = document.getElementById("item_len");
    var resit = document.getElementById("resit");
    var text;
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        var a = Object.keys(localStorage).sort();
        item_len.innerHTML = localStorage.length;
        var namea = a[i];
        text = localStorage[namea];
        var div_text = document.createTextNode(text);
        var word_name = document.createElement("span");
        word_name.appendChild(div_text);
        word_name.id = namea;
        var div_tag = document.createElement("div");
        var span_tag = document.createElement("button");
        var span_text = document.createTextNode("Delete");
        var span_tag2 = document.createElement("button");
        var span_text2 = document.createTextNode("Edit");
        var span_tag3 = document.createElement("button");
        var span_text3 = document.createTextNode("Change");
        var input_tag = document.createElement("input");
        input_tag.classList.add(
          "hidden",
          "bg-transparent",
          "border-b-2",
          "border-green-500",
          "outline-none",
          "rounded-md"
        );
        input_tag.value = text;
        input_tag.type = "text";
        span_tag.classList.add(
          "w-auto",
          "h-7",
          "rounded-full",
          "bg-red-500",
          "hover:cursor-pointer",
    
          "text-white",
          "flex",
          "justify-center",
          "items-center",
          "box-border",
          "p-2"
        );
        span_tag.id = namea;
        span_tag.setAttribute("onclick", "del(this.id)");
        //
        span_tag2.classList.add(
          "w-auto",
          "h-7",
          "rounded-full",
          "bg-orange-400",
          "hover:cursor-pointer",
          "ml-auto",
          "mr-2",
          "text-white",
          "flex",
          "justify-center",
          "items-center",
          "box-border",
          "p-2"
        );
        span_tag2.id = namea;
        span_tag2.setAttribute("onclick", "edi(this.id)");
    
        span_tag3.classList.add(
          "w-auto",
          "h-7",
          "rounded-full",
          "bg-green-600",
          "hover:cursor-pointer",
          "ml-auto",
          "mr-2",
          "text-white",
          "hidden",
          "justify-center",
          "items-center",
          "box-border",
          "p-2"
        );
        span_tag3.id = namea;
        span_tag3.setAttribute("onclick", "change(this.id)");
        div_tag.classList.add(
          "w-full",
          "h-10",
          "bg-slate-300",
          "rounded-full",
          "mt-2",
          "flex",
          "justify-between",
          "items-center",
          "box-border",
          "p-2",
          "hover:bg-slate-400"
        );
        div_tag.appendChild(input_tag);
        div_tag.appendChild(word_name);
        div_tag.appendChild(span_tag3);
        div_tag.appendChild(span_tag2);
        span_tag2.appendChild(span_text2);
        span_tag3.appendChild(span_text3);
        div_tag.appendChild(span_tag);
        span_tag.appendChild(span_text);
    
        item_father.appendChild(div_tag);
       
        
      }
    }
    var item_text = document.getElementById("item_text");
    var add_item = document.getElementById("add_item");
    add_item.addEventListener("click", function () {
      var i = localStorage.length;
      i += 1;
      var name = "item" + i;
      var text = item_text.value;
      text = text.trim();
      if (text !== "") {
        localStorage.setItem(name, text);
        item_text.value = null;
        location.reload();
      } else {
        item_text.style.borderColor = "red";
      }
    });
    function del(id) {
      localStorage.removeItem(id);
      location.reload();
    }
    function edi(id) {
      var par = document.getElementById(id).parentElement;
      var input = par.children[0];
      var span = par.children[1];
      var span2 = par.children[2];
      var span3 = par.children[3];
      input.style.display = "block";
      span.style.display = "none";
      span2.style.display = "flex";
      span3.style.display = "none";
    }
    function change(id) {
      var input = document.getElementById(id).parentElement.children[0];
      var work_title = document.getElementById(id).parentElement.children[1];
      var edited_btn = document.getElementById(id).parentElement.children[2];
      var edit = document.getElementById(id).parentElement.children[3];
      var input_text = "";
      input_text = input.value;
      input_text = input_text.trim();
      if (input_text !== "") {
        work_title.textContent = input_text;
        localStorage.setItem(id, input_text);
        input.style.display = "none";
        work_title.style.display = "block";
        edited_btn.style.display = "none";
        edit.style.display = "flex";
      } else {
        input.style.backgroundColor = "red";
      }
    }
    resit.addEventListener("click",function () {
      localStorage.clear();
      location.reload()
    });
  }else if(navigator.onLine == false){
    document.getElementById("offline").style.display = "flex";
  }
});