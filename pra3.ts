type Timestamped = { createdAt: Date; updatedAt: Date };
  type SoftDeletable = { deletedAt: Date | null };

   user[]=Timestamped&SoftDeletable&{
   id: number
   name: string
   email: string
  }
  

  // さらに、User から deletedAt が null のものだけを返す関数を実装せよ
  function getActiveUsers(users: User[]): User[] {
     for (let i=0; i=<)
  }