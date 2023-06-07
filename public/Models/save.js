//const mtlLoader1 = new MTLLoader()
//mtlLoader1.load(
//    'models/kamisama_no_shinden.mtl',(material) =>{
//        material.preload()
//        console.log(material)
//        const objLoader1 = new OBJLoader()
//        objLoader1.setMaterials(material)
//        objLoader1.load(
//            'models/kamisama_no_shinden.obj',(object) =>{
//
//                scene.add(object)
//            },
//            (xhr) => {
//                console.log(xhr.loaded / xhr.total * 100 + '% loaded')
//            }, 
//            (error) => {
//                console.log(error)
//            }
//        )
//    }
//)