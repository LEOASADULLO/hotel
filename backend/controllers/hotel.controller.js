import Hotel from "../models/hotel.model.js";
import Room from "../models/room.model.js";
import path from "path";

export const createHotel = async (req, res, next) => {
  const {
    name,
    type,
    city,
    address,
    distance,
    title,
    desc,
    rating,
    rooms,
    cheapestPrice,
    featured,
  } = req.body;
  //   console.log(req.body);
  const { filename } = req.file;
  console.log(req.file);
  try {
    const savedHotel = await Hotel.create({
      photos: `/${filename}`,
      name,
      type,
      city,
      address,
      distance,
      title,
      desc,
      rating,
      rooms,
      cheapestPrice,
      featured,
    });
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const getPhotos = async (req, res, next) => {
  const { file } = req.params;
  return res.sendFile(path.join(process.cwd() + "/", "uploads", file));
};

// app.post("/upload-image", upload.single("image"), async(req, res)=>{
//     console.log(req.body);
//     const imageName = req.filename;
//     try {
//         await Images.create({image:imageName})
//         res.json({status:"okey"})
//     } catch (error) {
//         res.json({status:error})
//     }
// })
export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel removed from my db");
  } catch (error) {
    next(error);
  }
};
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};
export const getHotels = async (req, res, next) => {
  const { limit, min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);

    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};
export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

// const HotelUpload= {
//     async createHotel({name,type,city,adress,distance,title,desc,{photos},{file}){
//         let bookName = v4()+'.'+image.name.replace(/\s/g," ").split('.')[1]
//         let book = await fetch(CREATE_BOOK , title,page,year,price,genre_id,author_id,description , bookName)
//         image.mv(path.join(process.cwd(),'src', "static" , bookName) , (err) =>{
//             if(err){
//                 console.log(err)
//             }
//         })
//         return book
//     }
