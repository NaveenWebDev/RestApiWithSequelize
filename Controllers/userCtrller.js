const User = require("../models/user");

const addUser = async(req, res)=>{

    const naveen = await User.create({firstName:"naveen", lastName:"sharma"});
    // naveen.set({firstName:"pooja"});
    naveen.save();
    res.status(200).json(naveen.toJSON(naveen));

}
// ================= read for crud ==================

const getUser = async (req, res)=>{
    const naveen = await User.findAll({});
    res.status(200).json({data:naveen})
}

const getUsers = async (req, res)=>{
    const data = await User.findOne({
        where:{
            id:req.params.id
        }
    });
    res.status(200).json({data:data})
}

// ============= create for crud post ================

const postUsers = async(req, res)=>{
    const postData = req.body;
    if(postData.length>1){
        // ====== for multiple data add=======
        var postdata = await User.bulkCreate(postData);
    }else{
        var postdata = await User.create(postData);
        postdata.save();
    }
    res.send("data sended");
}
// ==================delete for crud ============================

const deleteUser = async (req, res)=>{
    const deletedata = await User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:deletedata})
}

// =====================update for crud==============================

const updateUser = async (req, res)=>{
    var updateddata = req.body;
    const updateDate = await User.update(updateddata,{
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:'Dataupdated Successful'})
}

module.exports={
    addUser, getUser, getUsers, postUsers, deleteUser, updateUser
}