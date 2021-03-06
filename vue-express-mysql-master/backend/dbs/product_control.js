var models = require('../models')

/*大致的意思：
      product表中存储两种商品product1和product2
      material表中存五种原料：material1，material2，material3，material4，material5
      repertory表中存三个仓库：repertory1，repertory2，repertory-1（repertory-1存储缺料，具体见下面解释）
      station表中存两个工位：station1，station2
      stock表中存五条：
          1. material1存在repertory1中30（remain=30）
          2. material2存在repertory1中30
          3. material3存在repertory2中30
          4. material4存在repertory2中30
          5. material5存在repertory2中30
      consist表中存九条数据：
          product1由material1-material4各十个组成
          product2由material1-material5各十个组成
      对于缺料的处理：我仍旧将缺料的数据存入了领料单，然后对应的仓库为一个id为-1的仓库，
                     原因是我们没有表来存储product与station的关系，如果缺料不插入领料
                     单，会导致工位信息丢失。我感觉添加一个id为-1的仓库对其他部分的影
                     响应该不大，如果很大，我再想办法修改
*/





const productControl = async function(){
    /* await models.ProductCate.destroy({where:{}});
    await models.Buy.destroy({where:{}});
    await models.Product.destroy({where:{}});
    await models.Material.destroy({where:{}});
    await models.MaterCate.destroy({where:{}});
    await models.Consist.destroy({where:{}});
    await models.Stock.destroy({where:{}}); */

    var productCate1 = await models.ProductCate.create({
        'name': 'proCate1'
    });

    var productCate2 = await models.ProductCate.create({
        'name': 'proCate2'
    })

    var product1 = await models.Product.create({
        'id': 661,
        'name': 'product1',
        'status': 'status1',
        'price': 1000,
        'add_time': '2018-02-15 12:00:00',
        'remark': 'remark1'
    })

    await productCate1.addProduct(product1)

    var product2 = await models.Product.create({
        'id': 662,
        'name': 'product2',
        'status': 'status2',
        'price': 1000,
        'add_time': '2018-02-15 12:00:00',
        'remark': 'remark2'
    })

    await productCate2.addProduct(product2)

    var materCate1 = await models.MaterCate.create({
        'name': 'materCate1'
    })

    var materCate2 = await models.MaterCate.create({
        'name': 'materCate2'
    })

    var material1 = await models.Material.create({
        'id': 661,
        'name': 'material1'
    })

    await materCate1.addMaterial(material1)

    var material2 = await models.Material.create({
        'id': 662,
        'name': 'material2'
    })

    await materCate1.addMaterial(material2)

    var material3 = await models.Material.create({
        'id': 663,
        'name': 'material3'
    })

    await materCate1.addMaterial(material3)

    var material4 = await models.Material.create({
        'id': 664,
        'name': 'material4'
    })

    await materCate2.addMaterial(material4)    

    var material5 = await models.Material.create({
        'id': 665,
        'name': 'material5'
    })

    await materCate2.addMaterial(material5)

    var repertory1 = await models.Repertory.create({
        'name': 'repertory1',
        'max': 100,
        'remark': 'remark',
        'userId': 244,
        'managerId':241
    })

    var repertory2 = await models.Repertory.create({
        'name': 'repertory2',
        'max': 100,
        'remark': 'remark',
        'userId': 244,
        'managerId':241
    })

    var repertory0 = await models.Repertory.create({
        'name': 'repertory0',
        'max': 100,
        'remark': 'remark',
        'userId': 244,
        'managerId':241
    })

    var stock1 = await models.Stock.create({
        'style': false,
        'place': 661,
        'remain': 30,
        'occupancy': 0
    })
    

    await material1.addStock(stock1);

    var stock2 = await models.Stock.create({
        'style': false,
        'place': 662,
        'remain': 30,
        'occupancy': 0
    })

    await material2.addStock(stock2);

    var stock3 = await models.Stock.create({
        'style': false,
        'place': 663,
        'remain': 30,
        'occupancy': 0
    })

    await material3.addStock(stock3);

    var stock4 = await models.Stock.create({
        'style': false,
        'place': 664,
        'remain': 30,
        'occupancy': 0
    })

    await material4.addStock(stock4);

    var stock5 = await models.Stock.create({
        'style': false,
        'place': 665,
        'remain': 30,
        'occupancy': 0
    })

    await material5.addStock(stock5);

    var stock11 = await models.Stock.create({
        'style': true,
        'place': 666,
        'status': '',
        'remain': 1,
        'unit': '千个',
        'batch': 'B1',
    });
    
    var stock12 = await models.Stock.create({
        'style': true,
        'place': 667,
        'status': '',
        'remain': 2,
        'unit': '千个',
        'batch': 'B2',
    });

    var station1 = await models.Station.create({
        'name': '工位1'
    });

    var station2 = await models.Station.create({
        'name': '工位2'
    });

    var station3 = await models.Station.create({
        'name': '工位3'
    });

    await stock11.setProduct(product1);
    await stock12.setProduct(product2);
    await stock11.setRepertory(repertory1);
    await stock12.setRepertory(repertory2);


    await repertory1.addStock(stock1);
    await repertory1.addStock(stock2);
    await repertory2.addStock(stock3);
    await repertory2.addStock(stock4);
    await repertory2.addStock(stock5);

    await product1.addMaterial(material1, {'quantity': 10});
    await models.Consist.update({'quantity': 10},{where:{productId:661,materialId:661}});

    await product1.addMaterial(material2, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:661,materialId:662}});

    await product1.addMaterial(material3, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:661,materialId:663}});

    await product1.addMaterial(material4, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:661,materialId:664}});

    await product2.addMaterial(material1, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:662,materialId:661}});

    await product2.addMaterial(material2, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:662,materialId:662}});

    await product2.addMaterial(material3, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:662,materialId:663}});

    await product2.addMaterial(material4, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:662,materialId:664}});

    await product2.addMaterial(material5, {
        'quantity': 10
    });
    await models.Consist.update({'quantity': 10},{where:{productId:662,materialId:665}});
}

module.exports = {
	productControl: productControl
}
