  var x=document.getElementById("login");
                var y=document.getElementById("register");
                var z=document.getElementById("btn");

                function register(){
                    x.style.left="-450px";
                    y.style.left="50px";
                    z.style.left="110px";
                    window.location.href = "/home1.html";
                }

                function login(){
                    x.style.left="50px";
                    y.style.left="450px";
                    z.style.left="0px";
                }

                document.querySelectorAll(".copy-link").forEach((copyLinkParent) => {
                    const inputField = copyLinkParent.querySelector(".copy-link-input");
                    const copyButton = copyLinkParent.querySelector(".copy-link-button");
                    const text = inputField.value;
                  
                    inputField.addEventListener("focus", () => inputField.select());
                  
                    copyButton.addEventListener("click", () => {
                      inputField.select();
                      navigator.clipboard.writeText(text);
                  
                      inputField.value = "Phone Number Copied!";
                      setTimeout(() => (inputField.value = text), 2000);
                    });
                  });

                  document.querySelectorAll(".copy1-link").forEach((copyLinkParent) => {
                    const inputField = copyLinkParent.querySelector(".copy1-link-input");
                    const copyButton = copyLinkParent.querySelector(".copy1-link-button");
                    const text = inputField.value;
                  
                    inputField.addEventListener("focus", () => inputField.select());
                  
                    copyButton.addEventListener("click", () => {
                      inputField.select();
                      navigator.clipboard.writeText(text);
                  
                      inputField.value = "Phone Number Copied!";
                      setTimeout(() => (inputField.value = text), 2000);
                    });
                  });

                  document.querySelectorAll(".copy2-link").forEach((copyLinkParent) => {
                    const inputField = copyLinkParent.querySelector(".copy2-link-input");
                    const copyButton = copyLinkParent.querySelector(".copy2-link-button");
                    const text = inputField.value;
                  
                    inputField.addEventListener("focus", () => inputField.select());
                  
                    copyButton.addEventListener("click", () => {
                      inputField.select();
                      navigator.clipboard.writeText(text);
                  
                      inputField.value = "Phone Number Copied!";
                      setTimeout(() => (inputField.value = text), 2000);
                    });
                  });

                  document.querySelectorAll(".copy3-link").forEach((copyLinkParent) => {
                    const inputField = copyLinkParent.querySelector(".copy3-link-input");
                    const copyButton = copyLinkParent.querySelector(".copy3-link-button");
                    const text = inputField.value;
                  
                    inputField.addEventListener("focus", () => inputField.select());
                  
                    copyButton.addEventListener("click", () => {
                      inputField.select();
                      navigator.clipboard.writeText(text);
                  
                      inputField.value = "Phone Number Copied!";
                      setTimeout(() => (inputField.value = text), 2000);
                    });
                  });
                  


                  
                