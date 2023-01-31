const adduser = async(req,res,next)=>{
    let users = req.body;
    query = "insert into users (name,email,phone) values(?,?,?)";
    connection.query(query,[users.name,users.email,users.phone],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "User Added Successfully"});
        }
        else
        return res.status(500).json(err);
    }) ;
};

const getuser = async(req,res,next)=>{
    var query = "select * from users";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else
        return res.status(500).json(err);
    }) ;
};

const deleteuser = async(req,res,next)=>{
    const id = req.params.id;
    var query = "delete from users where id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"User id is not found"});
            }
            return res.status(200).json({message:"Product Deleted Successfully"});
        }
    });
};

module.exports = {
    adduser,
    getuser,
    deleteuser
}