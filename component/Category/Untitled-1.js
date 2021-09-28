<View>
          <View style={{marginTop:30,}}>

            <Text style={{textAlign:"center",width:'100%',padding:10,backgroundColor:'green'}}>Category</Text>
        
        <FlatList horizontal  data={category} renderItem={({item})=>(
        <TouchableOpacity style={{width:'100%'}} onLongPress={()=>alert("Too long press")}  onPress={()=>navigation.navigate('SubCategory',item)}>
        <View style={{width:width/2}}>
            <View style={styles.container}>
              
                  <View style={styles.card} />
                  <Text style={styles.title}>{item.category_name}</Text>
            </View>
            
        </View>
    </TouchableOpacity>
   
      )} />
      
      </View>


      </View>




// const styles=StyleSheet.create({
//   container:{
//     width:width/2-20,
//     height:width/5,
//     padding:10,
//     borderRadius:10,
//     marginTop:10,
//     marginBottom:5,
//     marginLeft:10,
//     alignItems:'center',
//     elevation:8,
//     backgroundColor:'white'
//   },
//   title:{
//     top:-55,
//     fontWeight:"bold",
//     fontSize:10,
//     textAlign:"center"
    
//   },
//   image:{
//     width:width/2 - 20 -10,
//     height:width/2 -20 -30,
//     backgroundColor:'transparent',
//     position:'absolute',
//     top:-45,

//   },
//   card:{
//     marginBottom:10,
//     height:width/2 -20-90,
//     backgroundColor:'transparent',
//     width:width/2-20-10

//   },

//   itemlist:{
//       width:'220%',
//       padding:10,
//       backgroundColor:'green',
//       margin:1,

//   },
//   clearfix:{
//     marginTop:50
//   },
//   categoryname:{
//     marginRight:380,
//     textAlign:"center",
//     fontSize:18,
    
//   }
// });
