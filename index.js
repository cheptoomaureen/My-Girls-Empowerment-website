// Add event listeners to all navigation links
        document.querySelectorAll('nav a').forEach(anchor) ; 
            anchor.addEventListener('click'), function(e) 
                {}.preventDefault(); // Prevent default behavior of anchor tag

                // Get the target section's id from the href attribute
                const targetId = this.getAttribute('href').substring(1);

                // Find the target section by its id
                const targetSection = document.getElementById(targetId);

                // Scroll to the target section smoothly
                targetSection.scrollIntoView
                    behavior: ('smooth') ;
                    function myFunction() {
                        var popup = document.getElementById("myPopup");
                        popup.classList.toggle("show");
                      }
                      function openPopup() {
                        document.getElementById("popup").style.display = "block";
                        document.getElementsByClassName("overlay")[0].style.display = "block";
                    }
                    
                    function closePopup() {
                        document.getElementById("popup").style.display = "none";
                        document.getElementsByClassName("overlay")[0].style.display = "none";
                    }          