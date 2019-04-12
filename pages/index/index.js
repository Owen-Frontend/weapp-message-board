//index.js
Page({
  data: {
    inputVal:'',
    msgData:[ ]
  },
  changeInputVal(ev){
    this.setData({
      inputVal: ev.detail.value
    });
  },
   addMsg(){
  //   this.data.msgData.push({
  //     msg:this.data.inputVal
  //   });
  var list=this.data.msgData;
  list.push({
    msg:this.data.inputVal
  });
  // 更新
  this.setData({
    msgData:list,
    inputVal:''
  });
  },

  delMsg(ev){
    var n=ev.target.dataset.index;
    var list=this.data.msgData;
    list.splice(n,1);
    this.setData({
      msgData:list
    })
  }
})
