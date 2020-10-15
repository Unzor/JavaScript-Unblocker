function myFunction() {
  var person = document.getElementById("redirect").value
  var UnblockedSite = window.open();
  UnblockedSite.document.title="Unblocked Website"
  var btn = document.createElement("iframe");
  btn.src=person;
  btn.style.position="fixed";
    btn.style.top="0";
 btn.style.left="0";
 btn.style.bottom="0";
 btn.style.right="0";
 btn.style.width="100%";
 btn.style.height="100%";
  btn.style.border="none";
   btn.style.margin="0";
 btn.style.padding="0";
 btn.style.overflow="hidden";
 btn.style.zIndex="999999";
 UnblockedSite.document.body.appendChild(btn);  
var icon = document.createElement("link");
icon.rel="icon";
icon.href="https://r72.cooltext.com/rendered/cooltext365531619205506.png"
icon.type="image/gif"
icon.sizes="16x16"
 UnblockedSite.document.head.appendChild(icon); 
}
var input = document.getElementById("redirect");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }
});
