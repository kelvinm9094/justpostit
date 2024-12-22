"use client"
import React, { useEffect,useState } from 'react'
import app from '../Shared/firebaseConfig';
import UserInfo from '../components/UserInfo';
import { collection, getDocs,getDoc,doc, getFirestore, query, where } from 'firebase/firestore'

function Profile({ params }) {
  const [userId, setUserId] = useState(null);
  const db = getFirestore(app); 
  const [user, setUser] = useState();
  
  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      if (resolvedParams?.userId) {
        const decodedUserId = resolvedParams.userId.replace('%40', '@');
        console.log(decodedUserId);
        setUserId(decodedUserId);
        getUserInfo(decodedUserId); // Call getUserInfo with the decoded userId
      }
    }
    fetchParams();
  }, [params]);

  
  const getUserInfo = async(email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef) ;
    if (docSnap.exists()) {
    
    setUserInfo(docSnap.data());

} else {
    // docSnap.data() will be undefined in this case
    console. log("No such document!");
    }
}
  
  return (
    <div>
     {userInfo?
     <div>
      <UserInfo userInfo={userInfo} />
      
      </div> :null}
    </div>
  );
}

export default Profile;
