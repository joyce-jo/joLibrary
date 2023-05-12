<script type="text/javascript">
            function validate()
            {
                var email =document.getElementById("uname");
                var password =document.getElementById("pass");
                

                if (email.value==""|| password.value=="")
                {
                    alert("Credentials can't be blank");
                    return false;
                }
                else{
                    alert("Welcome,Happy Learning!! ");
                    true;
                }
            }

        </script>