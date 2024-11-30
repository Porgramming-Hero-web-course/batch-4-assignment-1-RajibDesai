{


    interface Profile {
        name: string;
        age: number;
        email: string
    }
    
    const myProfile : Profile = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    
    function updateProfile<T>(obj: T, updates: Partial<T>):T { 
        return {...obj, ...updates}; 
    }
    
    console.log(updateProfile(myProfile, { age: 26 }));


}