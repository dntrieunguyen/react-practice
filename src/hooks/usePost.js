export const usePost = async todoSubmit => {
   //handle
   try {
      const res = await fetch(
         'https://todo-list-lab-7a557-default-rtdb.asia-southeast1.firebasedatabase.app/todo-list.json',
         {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(todoSubmit),
         },
      );

      if (!res) {
         console.log('Error of sending data');
      }
   } catch (error) {
      console.log(error);
   }
};
