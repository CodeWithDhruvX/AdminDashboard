import mongoose from 'mongoose';

const ProductStatSchema = new mongoose.Schema({
    productId:String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year:Number,
    monthlyData:[
        {
            month:String,
            totalSales:Number,
            totalUnits:Number
        }
    ],
    dailyData:[
        {
            day:String,
            totalSales:Number,
            totalUnits:Number
        }
    ]
},
    { timestamps: true });

const ProductStat = mongoose.model('ProductStat', ProductStatSchema);

export default ProductStat;