interface UserInfo {
    _id: string;
    username: string;
    profileImage: string;
  }
  interface FoodInfo {
    _id: string;
    foodName: string;
    foodImage: string;
  }
 export interface userPostData {
    userInfo: UserInfo[];
    foodInfo: FoodInfo[];
    postData: any;
  }