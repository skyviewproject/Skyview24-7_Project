import React, { Component } from 'react'

class SesssionService extends Component 
{
   loginUserAndAndCreateSession(id, role, session)
   {
        localStorage.setItem("USER_ID", id);
        localStorage.setItem("USER_ROLE", role);
        localStorage.setItem("USER_SESSION", session);
   }

   logoutUserAndAndDestroySession()
   {
       localStorage.removeItem("USER_ID");
       localStorage.removeItem("USER_ROLE");
       localStorage.removeItem("USER_SESSION");
   }

   getUserId()
   {
       return localStorage.getItem("USER_ID");
   }

   getUserRole()
   {
       return localStorage.getItem("USER_ROLE");
   }

   getUserSession()
   {
       return localStorage.getItem("USER_SESSION");
   }
}

export default SesssionService
