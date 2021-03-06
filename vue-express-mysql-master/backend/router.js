var express = require('express');
var test = require('./api/testapi');


var Mater_cate = require('./api/mater_cate');//物料分类的api文件
var Product_cate = require('./api/product_cate');//货品分类的api文件
var BOM_mater = require('./api/BOM_mater');//物料管理的api文件
var BOM_product = require('./api/BOM_product');//货品管理的api文件


var router = express.Router();

router.get('/test2', Mater_cate.listallMater_cates)
router.get('/getProducts',BOM_product.listallBOM_product)
router.get('/insertConsist',BOM_product.insertConsist)
router.get('/getProductcates',Product_cate.listallProduct_cates)
router.get('/productSearch',BOM_product.queryBOM_product)
router.get('/cateProduct',Product_cate.listallProductbyProductCateid)
router.get('/addProduct',BOM_product.addBOM_product)
router.get('/modifyProduct',BOM_product.updateBOM_productByid)
router.get('/deleteProduct',BOM_product.deleteBOM_productById)
router.get('/getMaterial',BOM_mater.listallBOM_mater)
router.get('/materialSearch',BOM_mater.queryBOM_mater)
router.get('/addMaterial',BOM_mater.addBOM_mater)
router.get('/modifyMaterial',BOM_mater.updateBOM_materByid)
router.get('/deleteMaterial',BOM_mater.deleteBOM_materById)
router.get('/getMaterialcates',Mater_cate.listallMater_cates)
router.get('/cateMaterial',Mater_cate.listallMaterbyMaterCateid)
router.get('/materialSearchproduct',BOM_mater.findproducts)
router.get('/addMaterialcate',Mater_cate.addMater_cate)
router.get('/cateProductcate',Product_cate.listallProduct_catesbyProductCateid)
router.get('/addProductcate',Product_cate.addProduct_cate)
router.get('/deleteProductcate',Product_cate.deleteProduct_cateById)
router.get('/deleteMaterialcate',Mater_cate.deleteMater_cateById)
router.get('/Productmaterial',BOM_product.findmaterials)
router.get('/cateSon',Product_cate.listallProduct_catesbyProductCateid)
router.get('/cateSon2',Mater_cate.listallMater_catesbyMaterCateid)





//要引用哪个文件的api就用文件名.api函数名即可，一共4个api文件如上
//api还在绝赞扩充中
//此时打开浏览器，输入http://localhost:8070/test2应该会得到listallMater_cates()的结果，当然数据库是空的就会返回空值
var costmoduleonload = require('./api/costmoduleonloadapi');
var costmoduleonloadmtr = require('./api/costmoduleonloadmtrapi');
var cmproductquery = require('./api/cmproductqueryapi')
var cmmaterialquery = require('./api/cmmaterialqueryapi')
var supplier = require('./api/supplierapi');
var offerlist = require('./api/offerlistapi');
var offer = require('./api/offerapi');
var purchase = require('./api/purchaseapi');
var threshold_warning = require('./api/threshold_warning_api');
var io_events = require('./api/ioapi');
var stocks = require('./api/stocksapi');
var stations = require('./api/stationsapi');
var iorecord = require('./api/iorecordapi');

router.get('/test', test.testapi)
router.get('/costmoduleonload', costmoduleonload.onloadapi)
router.get('/costmoduleonloadmtr', costmoduleonloadmtr.onloadapi)
router.get('/cmproductquery', cmproductquery.searchapi)
router.get('/cmmaterialquery', cmmaterialquery.searchapi)


var getgroup=require('./api/getgroupapi');
var ModifyUserINFO=require('./api/modifyUserInfoapi');

var userInfor = require('./api/userInfor');
var user = require('./api/user');



router.get('/userInfor', userInfor.showUser);
router.get('/updateUser', userInfor.updateUser);
router.get('/changePass', userInfor.changePass);
router.post('/signin', user.signin);
router.post('/signout', user.signout);
router.post('/sessionin', user.sessionin);

router.get('/getgrouponloadapi', getgroup.onloadapi)
router.get('/getsinglegrouponloadapi', getgroup.singleonloadapi)
router.post('/searchuserapi', getgroup.searchuserapi)
router.post('/modifyUINFObyadmin', ModifyUserINFO.updateUserapi)
router.post('/removeuser', ModifyUserINFO.removeUserapi)
router.post('/adduser', ModifyUserINFO.addUserapi)
router.post('/upload', ModifyUserINFO.uploadapi)


var product = require('./api/productapi');


router.get('/product', product.productapi);
router.get('/findAllProduct', product.findAllProduct);
router.get('/addBuy', product.addBuy);
router.get('/deleteProduct', product.deleteProduct);
router.get('/addGetList', product.addGetList);
router.get('/confirmOrderList', product.confirmOrderList);
router.get('/findProductQuan', product.findProductQuan);
router.get('/findGoodOptions', product.findGoodOptions);
router.get('/findMaterials', product.findMaterials);
router.get('/findMaterialNum', product.findMaterialNum);
router.get('/addOrderList', product.addOrderList);
router.get('/deleteOrderList', product.deleteOrderList);
router.get('/addBuys', product.addBuys);
router.get('/addGetLists', product.addGetLists);
router.get('/findGetLists', product.findGetLists);
router.get('/deleteGetLists', product.deleteGetLists);
router.get('/findOrderLists', product.findOrderLists);
router.get('/findOrderListsByUser', product.findOrderListsByUser);
router.get('/findProducts', product.findProducts);
router.get('/findAllMater', product.findAllMater);
router.get('/updateOrderList', product.updateOrderList);
router.get('/getMaterStocks', product.getMaterStocks);
router.get('/toGet', product.toGet);
router.get('/updateGetList', product.updateGetList);
router.get('/findNewGetList', product.findNewGetList);
// router.get('/findAllOrderLists', product.findAllOrderLists);

router.get('/getAllUserIdAndName',supplier.getAllUserIdAndName);
router.get('/addSupplier',supplier.addSupplier);
router.get('/getSupplier',supplier.getSupplier);
router.get('/getSupplierById',supplier.getSupplierById);
router.get('/deleteSupplierById',supplier.deleteSupplierById);
router.get('/updateSupplierById',supplier.updateSupplierById);
router.get('/setMinOrder',supplier.setMinOrder);
router.get('/addMaterialsToSupplier',supplier.addMaterialsToSupplier);
router.get('/removeMaterialsFromSupplier',supplier.removeMaterialsFromSupplier);

router.get('/getOfferByOfferList',offer.getOfferByOfferList);
router.get('/deleteOffer',offer.deleteOffer);
router.get('/addOffer',offer.addOffer);
router.get('/updateOffer',offer.updateOffer);


router.get('/getOfferList',offerlist.getOfferList);
router.get('/getOfferListById',offerlist.getOfferListById);
router.get('/getOfferListBySupplier',offerlist.getOfferListBySupplier);
router.get('/addOfferList',offerlist.addOfferList);
router.get('/updateOfferList',offerlist.updateOfferList);
router.get('/deleteOfferList',offerlist.deleteOfferList);

router.get('/getMaterials',purchase.getMaterials);
router.get('/getAllMaterialsId',purchase.getAllMaterialsId);
router.get('/getAllMaterials',purchase.getAllMaterials);
router.get('/getMaterialsBySupplier',purchase.getMaterialsBySupplier);
router.get('/setSafeQuantity',purchase.setSafeQuantity);
router.get('/getStarve',purchase.getStarve);
router.get('/getAllStarve',purchase.getAllStarve);


router.get('/threshold_warning', threshold_warning.ThresholdWarning)
router.get('/getRepertory',io_events.getRepertory)
router.post('/stockAvail',io_events.stockAvail)
router.post('/placeAvail',io_events.placeAvail)
router.post('/wareAvail',io_events.wareAvail)
router.post('/insertWare',io_events.insertIO)
router.get('/stocks', stocks.Stocks)
router.get('/stations', stations.Stations)
router.get('/iorecord', iorecord.IORecord)
router.post('/findPerson',io_events.findPerson)
router.post('/findStockId',io_events.findStockid)
router.post('/exportWare',io_events.exportWare)
module.exports = router;
