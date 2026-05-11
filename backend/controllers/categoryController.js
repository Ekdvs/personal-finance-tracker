

//get all user categories
export const getAllCategories = async(request,response)=>{
    try {

        const userId = request.userId;

        if(!userId){
            return response.status(400).json(
                {
                    message:"User ID is required",
                    error:true,
                    success:false
                }
            )
        }

        
        
    } catch (error) {
        return response.status(500).json(
            {
                message:"Internal Server Error",
                error:true,
                success:false
            }
        )
    }
}