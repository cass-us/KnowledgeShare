import Guide from "../Models/GuideModel.js";
import likeModel from "../Models/likeModel.js";
import commentModel from "../Models/Comments.js";

export const createGuide = async (req, res) => {
    const { title, category, content, media } = req.body;

  
    if (!title || !content) {
        return res.status(400).json({ success: false, message: "Please fill all the fields." });
    }
 0
    try {
     
        const guide = await Guide.create({
            userId: req.user._id, 
            title,
            category,
            content,
            media,
        });

        res.status(201).json({
            success: true,
            message: "Guide created successfully.",
            guide: {
                id: guide._id,
                title: guide.title,
                category: guide.category,
            },
        });
    } catch (error) {
   
        res.status(500).json({
            success: false,
            message: "Failed to create guide.",
            error: error.message,
        });
    }
};


export const getAllguides = async (req,res)=>{

    try {
        const allGuides = await Guide.find();
        if(allGuides){
            res.status(200).json(allGuides);
        }else{
            res.status(200).json({success:false,message:"failed to load guides"});
        }
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const updateGuide = async (req,res) =>{
    
    const {id} = req.params;
    const guide = req.body;

    if(!guide.title || !guide.content || !guide.category){
        res.status(203).json({success:false, message:"Required fields are empty"});
    }
    try {
        const updatedGuide = await Guide.findByIdAndUpdate(id,guide);
        if(updateGuide){
            res.status(200).json({success:true, message:"Guide updated successfuly",Guide:updatedGuide})
        }else{
            res.status(203).json({success:false, message:"Failed to update guide"})
        }
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const deleteGuide = async (req,res) =>{

    const {id} = req.params;
    
    if(!id){
        res.status(203).json({success:false, message:"INVALID USER ID"});
    }
    try {
        const deletedGuide = await Guide.findByIdandDelete(id);
        if(deletedGuide){
            res.status(200).json({success:true,message:"Guide deleted ", Guide:deleteGuide});
            //TODO: what happens after the guide is deleted by the expert or author? Do we delete it completely or we create a new collection to save the deleted in?
        }else{
            res.status(203).json({success:false, message:"Failed to delete guide"})
        }
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const commentGuide = async (req, res) => {

    const { id } = req.params;
    const { comment_text } = req.body; 

    try {
      
        if (!comment_text || comment_text.trim() === "") {
            return res.status(400).json({ message: "Comment cannot be empty" });
        }
       
        const newComment = await commentModel.create({
            guide_id: id,
            user_id: req.user._id,
            comment_text, 
        });

        res.status(200).json({ message: "Comment added successfully", comment_text: newComment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const likeGuide = async (req, res) => {
    const { id } = req.params;

    try {
   
        const existingLike = await likeModel.findOne({ user_id: req.user._id, guide_id: id });

        if (existingLike) {
            return res.status(400).json({ message: "Guide already liked" });
        }

        const newLike = await likeModel.create({
            user_id: req.user._id,
            guide_id: id,
        });

        res.status(200).json({ message: "Guide liked", like: newLike });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const unlikeGuide = async (req, res) => {

    const { id } = req.params;

    try {
       
        const existingLike = await likeModel.findOne({ user_id: req.user._id, guide_id: id });

        if (!existingLike) {
            return res.status(400).json({ message: "Guide not liked yet" });
        }

        await likeModel.deleteOne({ user_id: req.user._id, guide_id: id });

        res.status(200).json({ message: "Guide unliked successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const latestGuides = async (req, res) => {

    let sortedByLatestDate = [];

    try {
       
        const latestGuides = await Guide.find();
        
        if (latestGuides) {
            sortedByLatestDate = [...latestGuides].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
        }

        res.status(200).json({message:"latest guides", sortedByLatestDate });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const topRatedGuide = async (req, res) => {
    try {
       
        const topLikedGuide = await likeModel.aggregate([
            { $group: { _id: "$guide_id", totalLikes: { $sum: 1 } } }, 
            { $sort: { totalLikes: -1 } }, 
            { $limit: 1 } 
        ]);

        if (!topLikedGuide.length) {
            return res.status(404).json({ message: "No likes found for any guides." });
        }

        const guide = await Guide.findById(topLikedGuide[0]._id);

        if (!guide) {
            return res.status(404).json({ message: "Guide not found." });
        }

        res.status(200).json({ guide, totalLikes: topLikedGuide[0].totalLikes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const totGuideLikes = async (req, res) => {
    const { id } = req.params; 

    try {
        
        const guide = await Guide.findById(id).populate("comments.user_id", "name"); 

        if (!guide) {
            return res.status(404).json({ message: "Guide not found." });
        }

        const likeCount = await likeModel.countDocuments({ guide_id: id });

        res.status(200).json({
            guide,
            totalLikes: likeCount
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



