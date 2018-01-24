<template>
  <div>
    <myModal ref="childMethod">
      <div slot="modal-content">
        <div id="modal-role">
          <div class="role-title">
            <img src="../../assets/image/personCenter/AddRole.png">
            <span v-if="!changePeople">添加角色</span>
            <span v-if="changePeople">修改角色</span>
          </div>
          <div class="role-body">
            <div class="role-cont">
              <span>游戏 :</span>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :disabled="item.disabled"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="role-cont">
              <span>区服 :</span>
              <el-select v-model="value1" @change="changeValue" placeholder="请选择">
                <el-option
                  v-for="item in optionsArea"
                  :key="item.areaCode"
                  :label="item.name"
                  :value="item.areaCode">
                </el-option>
              </el-select>
            </div>
            <div class="role-cont role-cont-input">
              <span style="margin-left: 120px;">昵称 : </span>
              <input maxlength="16" v-model="roleName" type="text" placeholder="请输入角色昵称，最多16个字符">
            </div>
            <div class="role-cont role-cont-input">
              <span style="margin-left: 90px;">角色说明 : </span>
              <input maxlength="20" type="text" v-model="roleMsg" placeholder="请输入角色说明，最多20字符">
            </div>
          </div>
          <div class="role-footer">
            <button class="add" @click="bingRole()">
              <img style="vertical-align: text-top;" src="../../assets/image/personCenter/addBlack.png">
              <span v-if="!changePeople">确认添加</span>
              <span v-if="changePeople">确认修改</span>
            </button>
            <button class="del" @click="modalClose()"><span>取消</span></button>
          </div>
        </div>
      </div>
    </myModal>
    <commonPart :linkActive="9">
      <div slot="pageRight">
        <div id="mysetting">
          <div class="title">
            个人设置
          </div>
          <template>
            <el-tabs v-model="activeName">
              <el-tab-pane label="个人资料" name="first">
                <div class="mysetting_01">
                  <div>
                    <ul class="clearfix mysetting_02">
                      <li>
                        <img-cut @getURL="getPic1">
                          <div slot="crop" v-show="!Pic1" class="mysetting_03 fr">
                            <img src="./../../assets/image/personCenter/choose.png"/>
                          </div>
                          <div slot="crop" v-show="Pic1" class="mysetting_03 fr hoverFloat">
                            <img :src="Pic1" style="width: 100%;height: 100%;vertical-align: bottom;"/>
                          </div>
                        </img-cut>
                      </li>
                      <li>
                        <div class="mysetting_06">
                          <img :src="userInfo.headPortrait" class="mysetting_04"/>
                          <p class="mysetting_05">当前头像</p>
                        </div>
                      </li>
                    </ul>
                    <div class="mysetting_07">文件支持jpg、png等格式，图片需小于2M</div>
                    <el-button type="info" :disabled="!Pic1" @click="saveheadPortrait">更新</el-button>
                  </div>
                </div>
                <div class="mysetting_09">
                  <div class="title" style="border: none;">
                    个人信息
                  </div>
                  <div class="mysetting_14">
                    <div class="mysetting_13">
                      <ul class="clearfix mysetting_10">
                        <li>昵称(不可修改)</li>
                        <li>
                          <el-input placeholder="请输入昵称" class="mysetting_11" v-model="nickname" disabled></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_10">
                        <li>性别限制</li>
                        <li class="mysetting_12">
                          <el-radio v-model="gender" :label="1">男</el-radio>
                          <el-radio v-model="gender" :label="2">女</el-radio>
                          <el-radio v-model="gender" :label="0">保密</el-radio>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_10" id="location">
                        <li>所在地区</li>
                        <li>
                          <el-select v-model="province" placeholder="请选择">
                            <el-option
                              v-for="item in locationList"
                              :key="item.id"
                              :label="item.name"
                              :value="item.id">
                            </el-option>
                          </el-select>
                          省
                        </li>
                        <li class="fr">
                          <el-select v-model="city" placeholder="请选择">
                            <el-option
                              v-for="item in cityList"
                              :key="item.id"
                              :label="item.name"
                              :value="item.id">
                            </el-option>
                          </el-select>
                          市
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_10">
                        <li>出生日期</li>
                        <li>
                          <el-date-picker
                            :editable="false"
                            value-format="yyyyMMdd"
                            v-model="birth"
                            type="date"
                            placeholder="选择日期">
                          </el-date-picker>
                        </li>
                      </ul>
                      <el-button type="info" @click="saveInfo">保存</el-button>
                      <!--<el-button type="info" @click="modalOpen">test</el-button>-->
                    </div>
                  </div>
                </div>
                <div>
                  <div class="title" style="border: none;">
                    密码修改
                  </div>
                  <el-steps :active="active" finish-status="success">
                    <el-step title="获取验证码"></el-step>
                    <el-step title="设置新密码"></el-step>
                    <el-step title="修改成功"></el-step>
                  </el-steps>
                  <div style="text-align: center">
                    <div class="mysetting_15" id="phoneCheck">
                      <template v-if="active === 1">
                        <div>手机号码: {{pnum | getPhoneNum}}</div>
                        <div>
                          <el-input placeholder="请输入验证码" class="mysetting_16" v-model="verCode"></el-input>
                          <el-button type="info" v-if="!sendMsgState" disabled
                                     style="padding-left: 0;padding-right: 0;width: 110px;text-align: center">{{seconds}}秒后重新发送
                          </el-button>
                          <el-button type="info" @click="getCheckNum" v-if="sendMsgState"
                                     style="padding-left: 0;padding-right: 0;width: 110px;text-align: center">获取验证码
                          </el-button>
                        </div>
                        <el-button type="info" @click="next">下一步</el-button>
                      </template>
                      <template v-if="active === 2">
                        <ul class="clearfix mysetting_10">
                          <li>新密码</li>
                          <li>
                            <el-input placeholder="请输入新密码" class="mysetting_17" v-model="pwd"
                                      type="password"></el-input>
                          </li>
                        </ul>
                        <ul class="clearfix mysetting_10">
                          <li>确认密码</li>
                          <li>
                            <el-input placeholder="请再次输入密码" class="mysetting_17" v-model="pwd2"
                                      type="password"></el-input>
                          </li>
                        </ul>
                        <el-button type="info" @click="next">下一步</el-button>
                      </template>
                      <template v-if="active === 3">
                        <div>
                          <img src="./../../assets/image/personCenter/successful.png" class="mysetting_18"/>
                          <p class="mysetting_19">恭喜，修改密码成功 </p>
                          <p class="mysetting_20">{{secondsLeft}}秒后自动返回登入界面</p>
                          <a href="" class="mysetting_21">手动返回</a>
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="实名认证" name="second">
                <template v-if="applyStep === 0">
                  <div class="mysetting_23">
                    <ul class="clearfix mysetting_22">
                      <li>
                        认证类型
                      </li>
                      <li style="line-height: 40px;">
                        <el-radio v-model="radio2" label="1">个人认证</el-radio>
                        <el-radio v-model="radio2" label="2">企业认证</el-radio>
                      </li>
                    </ul>
                    <template v-if="radio2 === '1'">
                      <ul class="clearfix mysetting_22">
                        <li>姓名</li>
                        <li>
                          <el-input placeholder="请输入真实姓名" v-model="personName" style="width: 140px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>身份证</li>
                        <li>
                          <el-input @change="checkId" placeholder="请输入真实身份证号" v-model="personId"
                                    style="width: 340px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>手持身份证照片</li>
                        <li>
                          <div class="mysetting_24">
                            <div style="padding-top: 35px;">
                              <img src="./../../assets/image/personCenter/add2.png" class="mysetting_22"/>
                              <p>上传手持身份证信息面</p>
                              <p>请确保姓名，身份证号码清晰 </p>
                              <p>文件大小不超过3M</p>
                            </div>
                            <div class="personL">
                              <el-upload
                                class="avatar-uploader"
                                action="http://116.62.204.235:8080/upload/uploadImgCostumer?thumbConfig=186x90&thumbConfig=270x153&thumbConfig=1080x480"
                                :show-file-list="false"
                                :on-success="personLSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="personLUrl" :src="personLUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              </el-upload>
                            </div>
                          </div>
                          <div class="mysetting_25">
                            <p>1. 请上传本人手持身份证信息面照片，照片中含有本人头部或上半身<br/>
                              2. 照片中本人形象需为免冠且并未化妆，五官清晰<br/>
                              3. 拍照时对焦点请置于身份证上，保证身份证信息清晰且未遮挡<br/>
                              4. 文件为数码照片，请勿进行美化和修改，以免申请失败<br/>
                              5. 上传文件格式支持png，jpg和bmp<br/>
                              6. 文件大小不超过3MB，文件尺寸最小为500px * 500px<br/>
                              7.所有上传信息均会被赛狗妥善保管，不会用于其他商业用途或提供给第三方</p>
                          </div>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>身份证国徽面照片</li>
                        <li>
                          <div class="mysetting_24">
                            <div style="padding-top: 35px;">
                              <img src="./../../assets/image/personCenter/add2.png" class="mysetting_22"/>
                              <p>上传手持身份证国徽面</p>
                              <p>文件大小不超过3M</p>
                            </div>
                            <div class="personPicR">
                              <el-upload
                                class="avatar-uploader"
                                action="http://116.62.204.235:8080/upload/uploadImgCostumer?thumbConfig=186x90&thumbConfig=270x153&thumbConfig=1080x480"
                                :show-file-list="false"
                                :on-success="personRSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="personRUrl" :src="personRUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              </el-upload>
                            </div>
                          </div>
                          <div class="mysetting_25">
                            <p>1. 身份证国徽面与信息面信息应为同一身份证的信息，照片清晰且未遮挡<br/>
                              2. 文件为数码照片，请勿进行美化和修改，以免申请失败<br/>
                              3. 上传文件格式支持png，jpg和bmp<br/>
                              4. 文件大小不超过3MB，文件尺寸最小为500px * 500px<br/>
                              5. 所有上传信息均会被赛狗妥善保管，不会用于其他商业用途或提供给第三方</p>
                          </div>
                        </li>
                      </ul>
                    </template>
                    <template v-if="radio2 === '2'">
                      <ul class="clearfix mysetting_22">
                        <li>公司名称</li>
                        <li>
                          <el-input placeholder="请输入完整公司名称" v-model="offName" style="width: 340px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>营业地址</li>
                        <li>
                          <el-input placeholder="请输入和营业执照一致的营业地址" v-model="offAdd" style="width: 340px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>联系人</li>
                        <li>
                          <el-input placeholder="请输入联系人姓名" v-model="offPeople" style="width: 180px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>联系电话</li>
                        <li>
                          <el-input placeholder="请输入联系人姓名" type="number" v-model="offNum"
                                    style="width: 180px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>统一社会信用代码</li>
                        <li>
                          <el-input placeholder="企业三证合一码" v-model="offCode" style="width: 340px;"></el-input>
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_22">
                        <li>营业执照</li>
                        <li>
                          <div class="mysetting_24">
                            <div style="padding-top: 35px;">
                              <img src="./../../assets/image/personCenter/add2.png" class="mysetting_22"/>
                              <p>点击上传图片</p>
                              <p>文件大小不超过3M</p>
                            </div>
                            <div class="offPic">
                              <el-upload
                                class="avatar-uploader"
                                action="http://116.62.204.235:8080/upload/uploadImgCostumer?thumbConfig=186x90&thumbConfig=270x153&thumbConfig=1080x480"
                                :show-file-list="false"
                                :on-success="offSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="offUrl" :src="offUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                              </el-upload>
                            </div>
                          </div>
                          <div class="mysetting_25">
                            <p>. 拍照时对焦点请置于营业执照上，保证信息清晰且未遮挡<br/>
                              2. 文件为数码照片，请勿进行美化和修改，以免申请失败<br/>
                              3. 上传文件格式支持png，jpg和bmp<br/>
                              4. 文件大小不超过3MB，文件尺寸最小为500px * 500px<br/>
                              5.所有上传信息均会被赛狗妥善保管，不会用于其他商业用途或提供给第三方</p>
                          </div>
                        </li>
                      </ul>
                    </template>
                    <el-button type="info" @click="commit()">提交认证</el-button>
                  </div>
                </template>
                <template v-if="applyStep === 2">
                  <div class="mysetting_28">
                    <img src="./../../assets/image/personCenter/successfulcup.png"/>
                    <p class="mysetting_26">认证成功</p>
                    <div class="mysetting_29" v-if="tSubsidy.tSubsidyCompany !== null">
                      <ul class="clearfix mysetting_27">
                        <li>认证类型：</li>
                        <li>企业</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>企业名称：</li>
                        <li>{{tSubsidyMsg.name}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>公司地址：</li>
                        <li>{{tSubsidyMsg.address}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>联系人：</li>
                        <li>{{tSubsidyMsg.linkman}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>联系电话：</li>
                        <li>{{tSubsidyMsg.contactWay}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>统一社会信用代码：</li>
                        <li>{{tSubsidyMsg.code}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>营业执照：</li>
                        <li>
                          <img :src="tSubsidyMsg.licensePic">
                        </li>
                      </ul>
                    </div>
                    <div class="mysetting_29"
                         v-if="tSubsidy.tSubsidyPerson !== null && tSubsidy.tSubsidyPerson !== undefined">
                      <ul class="clearfix mysetting_27">
                        <li>认证类型：</li>
                        <li>个人</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>姓名：</li>
                        <li>{{tSubsidyMsg.name}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>身份证号：</li>
                        <li>{{tSubsidyMsg.idCode}}</li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>身份证正面：</li>
                        <li>
                          <img :src="tSubsidyMsg.idCodePicFront">
                        </li>
                      </ul>
                      <ul class="clearfix mysetting_27">
                        <li>身份证反面：</li>
                        <li>
                          <img :src="tSubsidyMsg.idCodePicBack">
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
                <template v-if="applyStep === 1">
                  <div class="mysetting_30">
                    <img src="./../../assets/image/personCenter/waiting.png"/>
                    <div class="mysetting_31">认证信息审核中<span class="ani_dot">...</span></div>
                    <p>您的申请已经提交成功</p>
                    <p>我们将在48小时内完成审核，请静待审核结果</p>
                  </div>
                </template>
                <template v-if="applyStep === 3">
                  <div class="mysetting_30">
                    <img src="../../assets/image/subsidy_state/Reject.png"/>
                    <div class="mysetting_31">您提交的认证被驳回</div>
                    <p>原因：{{audit.auditReason}}</p>
                    <p class="againCommit">
                      <button @click="againCommit()">重新提交</button>
                    </p>
                  </div>
                </template>
              </el-tab-pane>
              <el-tab-pane label="绑定设置" name="third">
                <div class="gameBind">
                  <div class="gameBind-title">
                    <span class="point"></span>
                    <span>帐号绑定</span>
                  </div>
                  <div class="gameBind-cont">
                    <div class="cont">
                      <p class="fl cont-title">
                        <img v-if="!bindList.tUserAccountWeChat" src="../../assets/image/personCenter/info.png">
                        <img v-if="bindList.tUserAccountWeChat !== null"
                             src="../../assets/image/personCenter/success.png">
                        <span>微信绑定</span>
                      </p>
                      <p class="fl input">
                        <input type="text" v-model="WXCode" placeholder="绑定后可以使用微信登录，参与王者荣耀微信区比赛">
                      </p>
                      <p class="fr">
                        <a href="###" v-if="!bindList.tUserAccountWeChat" @click="bindAccount(1)">绑定微信</a>
                        <a href="###" v-else @click="changebindAccount(1,bindList.tUserAccountWeChat.id)">重新绑定</a>
                      </p>
                    </div>
                    <div class="cont">
                      <p class="fl cont-title">
                        <img v-if="!bindList.tUserAccountAlipay" src="../../assets/image/personCenter/info.png">
                        <img v-if="bindList.tUserAccountAlipay !== null"
                             src="../../assets/image/personCenter/success.png">
                        <span>支付宝绑定</span>
                      </p>
                      <p class="fl input">
                        <input type="text" v-model="allPayCode" placeholder="绑定后可将比赛收益现金券提取至你的支付宝帐号">
                      </p>
                      <p class="fr">
                        <a href="###" v-if="!bindList.tUserAccountAlipay" @click="bindAccount(3)">绑定支付宝</a>
                        <a href="###" v-else @click="changebindAccount(3,bindList.tUserAccountAlipay.id)">重新绑定</a>
                      </p>
                    </div>
                    <div class="cont">
                      <p class="fl cont-title">
                        <img v-if="!bindList.tUserAccountQq" src="../../assets/image/personCenter/info.png">
                        <img v-if="bindList.tUserAccountQq !== null" src="../../assets/image/personCenter/success.png">
                        <span>QQ绑定</span>
                      </p>
                      <p class="fl input">
                        <input type="number" v-model="QQCode" placeholder="绑定后可以参与王者荣耀QQ区及英雄联盟比赛">
                      </p>
                      <p class="fr">
                        <a href="###" @click="bindAccount(2)" v-if="!bindList.tUserAccountQq">绑定QQ</a>
                        <a href="###" @click="changebindAccount(2,bindList.tUserAccountQq.id)" v-else>重新绑定</a>
                      </p>
                    </div>
                    <div class="cont">
                      <p class="fl cont-title">
                        <img v-if="!bindList.tUserAccountSteam" src="../../assets/image/personCenter/info.png">
                        <img v-if="bindList.tUserAccountSteam !== null"
                             src="../../assets/image/personCenter/success.png">
                        <span>Steam数字ID绑定</span>
                      </p>
                      <p class="fl input">
                        <input type="text" v-model="steamCode" placeholder="绑定后可以参与王者荣耀QQ区及英雄联盟比赛">
                      </p>
                      <p class="fr">
                        <a href="###" v-if="!bindList.tUserAccountSteam" @click="bindAccount(4)">绑定Steam</a>
                        <a href="###" v-else @click="changebindAccount(4,bindList.tUserAccountSteam.id)">重新绑定</a>
                      </p>
                    </div>
                    <div class="cont">
                      <p class="fl cont-title">
                        <img v-if="!bindList.tUserAccountZhan" src="../../assets/image/personCenter/info.png">
                        <img v-if="bindList.tUserAccountZhan !== null"
                             src="../../assets/image/personCenter/success.png">
                        <span>战网绑定</span>
                      </p>
                      <p class="fl input">
                        <input type="text" v-model="battleCode" placeholder="绑定后可以参与王者荣耀QQ区及英雄联盟比赛">
                      </p>
                      <p class="fr">
                        <a href="###" v-if="!bindList.tUserAccountZhan" @click="bindAccount(5)">绑定战网</a>
                        <a href="###" v-else @click="changebindAccount(5,bindList.tUserAccountZhan.id)">重新绑定</a>
                      </p>

                    </div>
                  </div>
                  <div class="gameBind-role">
                    <div class="role-title">
                      <span class="point"></span>
                      <span>游戏角色绑定</span>
                      <span @click="addPeople()" class="fr" style="color:#fff;  cursor: pointer;">
                        <img src="../../assets/image/personCenter/add.png">
                        添加角色
                      </span>
                    </div>
                    <div class="gameBind-table-title clear">
                      <p class="fl">游戏类型</p>
                      <p class="fl">区服</p>
                      <p class="fl">角色昵称</p>
                      <p class="fl">说明</p>
                    </div>
                    <div class="gameBind-role-cont clear" v-for="item in roleList">
                      <p class="fl">
                        <img v-if="item.gameCode === 1" src="../../assets/image/personCenter/LeagueofLegends.png">
                        <img v-if="item.gameCode === 2" src="../../assets/image/personCenter/SWXF.png">
                        <img v-if="item.gameCode === 3" src="../../assets/image/personCenter/glory.png">
                        <img v-if="item.gameCode === 4" src="../../assets/image/personCenter/HearthStone.png">
                        <img v-if="item.gameCode === 5" src="../../assets/image/personCenter/dota2.png">
                        <img v-if="item.gameCode === 6" src="../../assets/image/match/JDQS.png">
                        <span>{{item.gameName}}</span>
                      </p>
                      <p class="fl">{{item.areaName}}</p>
                      <p class="fl">{{item.gameNickname}}</p>
                      <p class="fl">{{item.gameDesc}}</p>
                      <!--<p class="fl"><a href="###" style="margin-right: 30px;"-->
                      <!--@click="change(item.id,item.gameCode,item.gameArea)">修改</a></p>-->
                      <p class="fl"><a href="###" @click="deleteMsg(item.id)">删除</a></p>
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </template>
        </div>
      </div>
    </commonPart>
  </div>
</template>
<script>
  import './../../assets/css/mySetting.css'
  import uploadImg from './../common/uploadImg.vue'
  export default {
    data: function () {
      return {
        istable: this.$route.query.table,
        pwd: '',
        pwd2: '',
        verCode: '',
        modalshow: false,
        userInfo: '',
        baseInfo: '',
        nickname: '',
        province: '',
        locationList: '',
        city: '',
        Pic1: '',
        applyStep: 0,
        secondsLeft: '',
        pnum: '',
        active: 1,
        birth: '',
        activeName: 'first',
        gender: '',
        radio2: '1',
        value: '',
        cityList: '',
        sendMsgState: true,
        seconds: '',
        offUrl: '',
        personLUrl: '',
        personRUrl: '',
        personName: '',
        personId: '',
        offName: '',
        offAdd: '',
        offPeople: '',
        offNum: '',
        offCode: '',
        WXCode: '',
        QQCode: '',
        allPayCode: '',
        steamCode: '',
        battleCode: '',
        bindList: [],
        options: [{
          value: '选项1',
          label: '王者荣耀',
          disabled: false
        }, {
          value: '选项2',
          label: '英雄联盟',
          disabled: false
        }, {
          value: '选项3',
          label: 'DOTA2',
          disabled: false
        }, {
          value: '选项4',
          label: '守望先锋',
          disabled: false
        }, {
          value: '选项5',
          label: '炉石传说',
          disabled: false
        }, {
          value: '选项6',
          label: '绝地求生',
          disabled: false
        }],
        value2: '',
        optionsArea: [],
        value1: '',
        roleName: '',
        roleMsg: '',
        gameCode: '',
        roleList: [],
        roleId: '',
        audit: '',
        tSubsidy: '',
        tSubsidyMsg: '',
        changeId: '',
        areaCode: '',
        time: '',
        changeGameCode: '',
        pass: true,
        changePeople: false
      }
    },
    created: function () {
      this.getNowTime()
      this.initInfo()
      this.getMysubidy()
      if (this.istable === 2) {
        this.activeName = 'second'
      }
      this.$ajax({
        method: 'POST',
        url: this.GLOBAL.webConfig + '/personcenter/queryGameAccountBinding',
        headers: this.GLOBAL.hearder
      })
        .then((res) => {
          console.log(res)
          this.bindList = res.data
          if (!res.data.tUserAccountAlipay) {
            this.allPayCode = ''
          } else {
            this.allPayCode = res.data.tUserAccountAlipay.account
          }
          if (!res.data.tUserAccountQq) {
            this.QQCode = ''
          } else {
            this.QQCode = res.data.tUserAccountQq.account
          }
          if (!res.data.tUserAccountSteam) {
            this.steamCode = ''
          } else {
            this.steamCode = res.data.tUserAccountSteam.account
          }
          if (!res.data.tUserAccountWeChat) {
            this.WXCode = ''
          } else {
            this.WXCode = res.data.tUserAccountWeChat.account
          }
          if (!res.data.tUserAccountZhan) {
            this.battleCode = ''
          } else {
            this.battleCode = res.data.tUserAccountZhan.account
          }
        })
//      查询绑定的角色
      this.queryBing()
      this.getAlreadyGame()
    },
    methods: {
//        获取绑定过的游戏
      getAlreadyGame () {
        var _this = this
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/personcenter/queryHasBindingGameCode',
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            _this.options[0].disabled = false
            _this.options[1].disabled = false
            _this.options[2].disabled = false
            _this.options[3].disabled = false
            _this.options[4].disabled = false
            _this.options[5].disabled = false
            for (let i = 0; i < res.data.length; i++) {
              console.log(res.data[i])
              if (res.data[i] === 1) {
                _this.options[1].disabled = true
              }
              if (res.data[i] === 3) {
                _this.options[0].disabled = true
              }
              if (res.data[i] === 5) {
                _this.options[2].disabled = true
                console.log(_this.options[2])
              }
              if (res.data[i] === 4) {
                _this.options[4].disabled = true
              }
              if (res.data[i] === 2) {
                _this.options[3].disabled = true
              }
              if (res.data[i] === 6) {
                _this.options[5].disabled = true
              }
            }
            console.log(_this.options)
          })
      },
      addPeople () {
        this.value1 = ''
        this.value2 = ''
        this.getAlreadyGame()
        this.changePeople = false
        this.modalOpen()
      },
      change (id, gameCode) {
        this.changePeople = true
        this.changeId = id
        this.changeGameCode = gameCode
        console.log(this.changeGameCode)
        this.modalOpen()
        this.changeBingRole()
      },
      getNowTime: function () {
        var myDate = new Date()
        var mydate = myDate.getDate()
        if (myDate.getDate() < 10) {
          mydate = '0' + myDate.getDate()
        }
        this.time = myDate.getFullYear().toString() + (myDate.getMonth() + 1).toString() + mydate.toString()
      },
      changeValue (label) {
//        console.log(label)
        this.areaCode = label
      },
      againCommit () {
        this.applyStep = 0
      },
      deleteMsg (id) {
        this.$confirm('此操作将删除该角色, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.delate(id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      getMysubidy () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/subsidy/subsidy/querySubsidyBaseInfo',
          headers: this.GLOBAL.hearder
        })
          .then((res) => {
            console.log(res)
            if (res.data.auditState !== null) {
              if (res.data.auditState === 1) {
                if (res.data.tSubsidyPerson !== null) {
                  this.tSubsidyMsg = res.data.tSubsidyPerson
                  this.tSubsidy = res.data
                  this.applyStep = 2
                } else if (res.data.tSubsidyCompany !== null) {
                  this.tSubsidy = res.data
                  this.tSubsidyMsg = res.data.tSubsidyCompany
                  this.applyStep = 2
                }
              } else if (res.data.auditState === 2) {
                this.audit = res.data
                this.applyStep = 3
              } else if (res.data.auditState === 0) {
                this.applyStep = 1
              }
            } else {
              this.applyStep = 0
            }
//                  console.log(this.tSubsidy.tSubsidyPerson)
          })
      },
      queryBing () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/queryGameRoleBinding',
          headers: this.GLOBAL.hearder,
          params: {
            pageNum: 1,
            pageSize: 10
          }
        })
          .then((res) => {
            this.roleList = res.data.list
            this.roleId = this.roleList.id
            console.log(this.roleList)
            console.log(this.value2)
          })
      },
//      修改角色
      changeBingRole () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/queryGameRoleBinding',
          headers: this.GLOBAL.hearder,
          params: {
            gameCode: this.changeGameCode,
            pageNum: 1,
            pageSize: 1
          }
        })
          .then((res) => {
            console.log(res)
            this.value2 = res.data.list[0].gameName
            this.roleName = res.data.list[0].gameNickname
            this.roleMsg = res.data.list[0].gameDesc
          })
          .catch(() => {
            this.$message.error('服务器异常！')
          })
      },
      bingRole () {
        console.log(this.roleMsg)
        if (this.areaCode === '' || this.gameCode === '' || this.roleMsg === '' || this.roleName === '') {
          this.$message.error('请完善所填信息！')
        } else {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + 'personcenter/saveOrUpdateGameRoleBinding',
            headers: this.GLOBAL.hearder,
            params: {
              gameArea: this.areaCode,
              gameCode: this.gameCode,
              gameDesc: this.roleMsg,
              gameNickname: this.roleName,
              id: this.changeId
            }
          })
            .then((res) => {
//            console.log(res)
              if (res.data.errCode === 0) {
                if (!this.changeId) {
                  this.$message.success('添加成功！')
                } else {
                  this.$message.success('修改成功！')
                }
                this.queryBing()
              } else {
                if (!this.changeId) {
                  this.$message.error('添加失败！')
                } else {
                  this.$message.error('修改失败！')
                }
              }
              this.getAlreadyGame()
              this.modalClose()
            })
            .catch(() => {
              this.$message.error('服务器异常！')
              this.modalClose()
            })
        }
      },
      gameArea (code) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/queryMatchAreas',
          headers: this.GLOBAL.hearder,
          params: {
            gameCode: code
          }
        })
          .then((res) => {
            this.optionsArea = res.data
//            console.log(this.optionsArea)
          })
      },
//        校验身份证格式
      checkId () {
        if (this.personName.trim() === '') {
          this.$message.error('姓名不能为空！')
          return
        }
        let city = {
          11: '北京',
          12: '天津',
          13: '河北',
          14: '山西',
          15: '内蒙古',
          21: '辽宁',
          22: '吉林',
          23: '黑龙江',
          31: '上海',
          32: '江苏',
          33: '浙江',
          34: '安徽',
          35: '福建',
          36: '江西',
          37: '山东',
          41: '河南',
          42: '湖北',
          43: '湖南',
          44: '广东',
          45: '广西',
          46: '海南',
          50: '重庆',
          51: '四川',
          52: '贵州',
          53: '云南',
          54: '西藏',
          61: '陕西',
          62: '甘肃',
          63: '青海',
          64: '宁夏',
          65: '新疆',
          71: '台湾',
          81: '香港',
          82: '澳门',
          91: '国外'
        }
        let tip = ''
        this.pass = true
        let code = this.personId
        if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
          tip = '身份证号格式错误'
          this.pass = false
        } else if (!city[this.personId.substr(0, 2)]) {
          tip = '地址编码错误'
          this.pass = false
        } else {
          // 18位身份证需要验证最后一位校验位
          if (code.length === 18) {
            code = code.split('')
            // ∑(ai×Wi)(mod 11)
            // 加权因子
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
            // 校验位
            let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
            let sum = 0
            let ai = 0
            let wi = 0
            for (let i = 0; i < 17; i++) {
              ai = code[i]
              wi = factor[i]
              sum += ai * wi
            }
//            let last = parity[sum % 11]
            if (parity[sum % 11] !== code[17]) {
//              tip = '校验位错误'
              this.pass = false
            }
          }
        }
        if (!this.pass && tip) {
//          $('.personId').focus()
          this.$message.error(tip)
        } else {
          this.pass = true
        }
      },
      //        上传身份证图片
      personRSuccess (res, file) {
        this.personRUrl = 'http://' + res.imgServer + '/' + res.path // 设置图片路径
//        console.log(this.personRUrl)
      },
      //        上传身份证图片
      personLSuccess (res, file) {
        this.personLUrl = 'http://' + res.imgServer + '/' + res.path // 设置图片路径
//        console.log(this.personLUrl)
      },
      //       上传营业执照图片
      offSuccess (res, file) {
        this.offUrl = 'http://' + res.imgServer + '/' + res.path // 设置图片路径
//        console.log(this.offUrl)
      },
//      校验图片格式
      beforeAvatarUpload (file) {
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isLt2M
      },
      modalClose () {
        console.log(this.areaCode)
        this.$refs.childMethod.modalClose()
      },
      modalOpen () {
        this.roleMsg = ''
        this.roleName = ''
        this.$refs.childMethod.modalShow()
      },
      getCheckNum () {
        this.sendMsgState = false
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + '/mobile/sendVerCodeToRestPassword',
          params: {
            mobile: this.pnum
          }
        })
          .then((response) => {
            if (response.data.errCode === 0) {
              this.recordSeconds()
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      getPic1 (val) {
        this.Pic1 = val
      },
      next () {
        if (this.active === 1) {
          this.$ajax({
            method: 'POST',
            url: this.GLOBAL.webConfig + '/mobile/checkVerCodeToRestPassword',
            params: {
              mobile: this.pnum,
              verCode: this.verCode
            }
          })
            .then((response) => {
              if (response.data.errCode === 0) {
                this.$message({
                  message: '恭喜你，验证码输入正确',
                  type: 'success'
                })
                this.active++
              } else {
                this.$message({
                  showClose: true,
                  message: response.data.errDesc,
                  type: 'error'
                })
              }
            })
            .catch(function (error) {
              console.log(error)
            })
          return
        }
        if (this.active === 2) {
          if (this.checkChangePwd()) {
            this.$ajax({
              method: 'POST',
              url: this.GLOBAL.webConfig + '/guest/modifyPasswordNoOld',
              headers: this.GLOBAL.hearder,
              params: {
                newPwd: this.pwd
              }
            })
              .then((response) => {
                if (response.data.errCode === 0) {
                  this.$message({
                    message: '恭喜你，密码修改成功',
                    type: 'success'
                  })
                  this.active++
                } else {
                  this.$message({
                    showClose: true,
                    message: response.data.errDesc,
                    type: 'error'
                  })
                }
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        }
      },
      checkChangePwd: function () {
        if (!this.pwd || !this.pwd2) {
          this.$message({
            showClose: true,
            message: '错了哦，输入密码不能为空',
            type: 'error'
          })
          return false
        }
        if (this.pwd !== this.pwd2) {
          this.$message({
            showClose: true,
            message: '错了哦，两次密码输入不一致',
            type: 'error'
          })
          return false
        }
        if (this.pwd.trim().length < 6 || this.pwd.trim().length > 12) {
          this.$message({
            showClose: true,
            message: '错了哦，请输入6到12位密码',
            type: 'error'
          })
          return false
        }
        return true
      },
      recordSeconds () {
        let _this = this
        this.seconds = 60
        this.$message({
          message: '验证码已成功发送至您手机',
          type: 'success'
        })
        let msgBackCount = setInterval(function () {
          if (_this.seconds !== 0) {
            _this.seconds--
          } else {
            _this.sendMsgState = true
            clearInterval(msgBackCount)
          }
        }, 1000)
      },
      saveheadPortrait () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/saveUserInfo',
          params: {
            headPortrait: this.Pic1
          },
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
            this.$message({
              message: '恭喜你，信息修改成功',
              type: 'success'
            })
            this.Pic1 = ''
            this.initInfo()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      saveInfo () {
        if (!this.gender || !this.city || !this.province || !this.birth) {
          this.$message({
            message: '对不起,请完善相关信息方可保存',
            type: 'error'
          })
          return
        }
        if (Number(this.birth) > Number(this.time)) {
          this.$message({
            message: '对不起,出生日期不能超过当前时间',
            type: 'error'
          })
          return
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/saveUserInfo',
          params: {
            gender: this.gender,
            locationCity: this.city,
            location: this.province,
            birthday: this.birth.substring(0, 4) + '/' + this.birth.substring(4, 6) + '/' + this.birth.substring(6, 8)
          },
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
//            console.log(response)
            this.$message({
              message: '恭喜你，信息修改成功',
              type: 'success'
            })
            this.initInfo()
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      initInfo () {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/getUserinfo',
          data: {},
          headers: this.GLOBAL.hearder
        })
          .then((response) => {
//            console.log(response)
            this.userInfo = response.data.tUser
            this.pnum = response.data.tUser.mobileNo
            this.gender = response.data.tUser.gender
            this.baseInfo = response.data
            this.nickname = response.data.tUser.nickname
            this.province = response.data.location
            this.city = response.data.locationcity
            this.locationList = response.data.locationList
            this.birth = response.data.birthdayYear + response.data.birthMonth + response.data.birthdayDay
            this.$store.commit('changeBaseInfo', response.data)
            this.$store.commit('changeUserInfo', response.data.tUser)
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      commit () {
//        console.log(this.pass)
        if (this.radio2 === '1') {
          this.checkId()
          if (this.pass) {
            if (this.personName.trim() === '') {
              this.$message.error('姓名不能为空！')
            } else if (this.personLUrl === '') {
              this.$message.error('请上传身份证信息面照片！')
            } else if (this.personRUrl === '') {
              this.$message.error('请上传身份证国徽面照片！')
            } else {
//              console.log(this.personId)
              this.$ajax({
                method: 'POST',
                url: this.GLOBAL.commomUrl + '/subsidy/subsidy/saveSubsidyPerson',
                headers: this.GLOBAL.hearder,
                params: {
                  idCode: this.personId,
                  name: this.personName,
                  idCodePicBack: this.personRUrl,
                  idCodePicFront: this.personLUrl
                }
              })
                .then((res) => {
//                  console.log(res)
                  if (res.data.errCode === 0) {
                    this.$message.success('提交成功！')
                    this.applyStep = 1
                  } else {
                    this.$message.error(res.data.errDesc)
                  }
                })
            }
          }
        } else {
          if (this.offName.trim() === '') {
            this.$message.error('公司名称不能为空！')
          } else if (this.offAdd.trim() === '') {
            this.$message.error('公司地址不能为空！')
          } else if (this.offPeople.trim() === '') {
            this.$message.error('联系人姓名不能为空！')
          } else if (this.offNum.trim() === '') {
            this.$message.error('联系人电话不能为空！')
          } else if (this.offNum.length !== 11) {
            this.$message.error('联系人电话格式错误！')
          } else if (this.offCode.trim() === '') {
            this.$message.error('统一信用代码不能为空！')
          } else if (this.offCode.length !== 18) {
            this.$message.error('统一信用代码格式错误！')
          } else if (this.offUrl === '') {
            this.$message.error('请上传营业执照！')
          } else {
            this.$ajax({
              method: 'POST',
              url: this.GLOBAL.commomUrl + '/subsidy/subsidy/saveSubsidyCompany',
              headers: this.GLOBAL.hearder,
              params: {
                address: this.offAdd,
                code: this.offCode,
                contactWay: this.offNum,
                licensePic: this.offUrl,
                linkman: this.offPeople,
                name: this.offName
              }
            })
              .then((res) => {
//                console.log(res)
                if (res.data.errCode === 0) {
                  this.$message.success('提交成功！')
                  this.applyStep = 1
                } else {
                  this.$message.error(res.data.errDesc)
                }
              })
          }
        }
      },
//      绑定帐号
      bindAccount (type, typeCode) {
        if (type === 1) {
          if (this.WXCode.trim() === '') {
            this.$message.error('帐号不能为空！')
            return
          } else {
            typeCode = this.WXCode
          }
        } else if (type === 2) {
          if (this.QQCode.trim() === '') {
            this.$message.error('帐号不能为空！')
            return
          } else {
            typeCode = this.QQCode
          }
        } else if (type === 3) {
          if (this.allPayCode.trim() === '') {
            this.$message.error('帐号不能为空！')
            return
          } else {
            typeCode = this.allPayCode
          }
        } else if (type === 4) {
          if (this.steamCode.trim() === '') {
            this.$message.error('帐号不能为空！')
            return
          } else {
            typeCode = this.steamCode
          }
        } else if (type === 5) {
          if (this.battleCode.trim() === '') {
            this.$message.error('帐号不能为空！')
            return
          } else {
            typeCode = this.battleCode
          }
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/saveOrUpdateGameAccountBinding',
          headers: this.GLOBAL.hearder,
          params: {
            account: typeCode,
            type: type
          }
        })
          .then((res) => {
//            console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('绑定成功')
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      },
//      修改绑定
      changebindAccount (type, id, typeCode) {
        if (type === 1) {
          typeCode = this.WXCode
        } else if (type === 2) {
          typeCode = this.QQCode
        } else if (type === 3) {
          typeCode = this.allPayCode
        } else if (type === 4) {
          typeCode = this.steamCode
        } else if (type === 5) {
          typeCode = this.battleCode
        }
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.commomUrl + '/stargo/personcenter/saveOrUpdateGameAccountBinding',
          headers: this.GLOBAL.hearder,
          params: {
            account: typeCode,
            type: type,
            id: id
          }
        })
          .then((res) => {
//            console.log(res)
            if (res.data.errCode === 0) {
              this.$message.success('绑定成功')
            } else {
              this.$message.error(res.data.errDesc)
            }
          })
      },
//      删除角色
      delate (id) {
        this.$ajax({
          method: 'POST',
          url: this.GLOBAL.webConfig + 'personcenter/deleteGameRoleBinding',
          headers: this.GLOBAL.hearder,
          params: {
            id: id
          }
        })
          .then((res) => {
            if (res.data.errCode === 0) {
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
              this.queryBing()
              this.getAlreadyGame()
            } else {
              this.$message({
                message: '删除失败！',
                type: 'error'
              })
            }
          })
      }
    },
    filters: {
      getPhoneNum (val) {
        if (val) {
          let text = val.toString()
          text = text.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
          return text
        }
      }
    },
    watch: {
      value2: function () {
        this.value1 = ''
        if (this.value2 === '选项3') {
          this.gameCode = 5
        } else if (this.value2 === '选项1') {
          this.gameCode = 3
        } else if (this.value2 === '选项5') {
          this.gameCode = 4
        } else if (this.value2 === '选项2') {
          this.gameCode = 1
        } else if (this.value2 === '选项4') {
          this.gameCode = 2
        } else if (this.value2 === '选项6') {
          this.gameCode = 6
        }
        console.log(this.gameCode)
        this.gameArea(this.gameCode)
      },
      active (curVal, oldVal) {
        let _this = this
        if (curVal === 3) {
          _this.secondsLeft = 3
          let pageBackCount = setInterval(function () {
            if (_this.secondsLeft !== 0) {
              _this.secondsLeft--
            } else {
              window.location.replace('./')
              clearInterval(pageBackCount)
            }
          }, 1000)
        }
//        console.log(curVal, oldVal)
      },
      province (curVal, oldVal) {
        if (oldVal) {
          this.city = ''
        }
        for (let i = 0; i < this.locationList.length; i++) {
          if (this.locationList[i].id === curVal) {
            this.cityList = this.locationList[i].nodes
          }
        }
      }
    },
    components: {
      uploadImg
    }
  }
</script>
