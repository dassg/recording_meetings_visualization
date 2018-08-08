
load("/home/vonnegut/Downloads/database/user_1.json");
load("/home/vonnegut/Downloads/database/user_0.json");
load("/home/vonnegut/Downloads/database/user_2.json");
load("/home/vonnegut/Downloads/database/user_3.json");
load("/home/vonnegut/Downloads/database/speech.json");
var users = [user_0,user_1,user_2,user_3];

var speech_data = [];
var i = 0;
var c = 0;

print("Done loading data!\n");

for(i = 0; i < speech.length; i++)
{
    
        var m = 0, k = 0;
        var l = 0;
        for(m = 0; m < users.length; m++){
            for(k = 0; k < users[m].length; k++){
                if(Number(speech[i].speechId) == Number(users[m][k].speechId)){
                l = 1;
                break;
                }
            }
        if(l== 1) 
        {break;}
    
        } 


    var user_name = "";
    
    if(m == 0)
    {
        user_name = "Gaurav";
    }
    else if(m == 1)
    {
        user_name = "Zhao";
    }
    else if(m == 2)
    {
        user_name = "Jingfei";
    }
    else if(m == 3)
    {
        user_name = "Logan";
    }
    else
    {
        print("ERROR! Instance for speechID " + i + "not found for any of the users, your data is bad!");
        continue;
    }
            
    
    speech_data[c++] = [{speech:speech[i].text,time: speech[i].end - speech[i].start, userID:m,location:speech[i].location, ID:speech[i]._id,confidence:speech[i].confidence, name:user_name }];
    
}

///// Database insertion
// replace test with collection name!

for(i = 0; i < speech_data.length; i++) {db.test.testcollec.insert(speech_data[i])}
