<template>
  <div>
    <button @click="fullScreen">点我全屏</button>
    <div id="bracket">
      <div class="container clearfix" id='dragger1' v-drag>
        <div class="container2" id="idOuterDiv">
          <template v-for="item in this.sortArray(matchList.rounds)">
            <div class="split split-one">
              <!-- END ROUND ONE -->
              <template v-if="item.players.length === 32">
                <div class="round round-one current">
                  <div class="round-details">Round 1
                    <br><span class="date">March 16</span>
                  </div>
                  <template v-for="item in 16">
                    <ul class="matchup">
                      <li class="team team-top" v-on:mouseover="enter('Duke')" @mouseleave="leave">
                        <template v-if="items.redIsProduce">
                          <template v-if="items.redTeamName">
                            <template v-if="items.redIsSign">
                              <span class="teamName">{{items.redTeamName}}</span>
                              <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                            </template>
                            <template v-else>
                              <span class="teamName">{{items.redTeamName}}</span>
                              <span class="score">弃</span>
                            </template>
                          </template>
                          <template v-else>
                            <span class="teamName">轮空</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">暂空</span>
                        </template>
                      </li>
                      <li class="team team-bottom" v-on:mouseover="enter('Virginia')" @mouseleave="leave">
                        <template v-if="items.blueIsProduce">
                          <template v-if="items.blueTeamName">
                            <template v-if="items.blueIsSign">
                              <span class="teamName">{{items.blueTeamName}}</span>
                              <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                            </template>
                            <template v-else>
                              <span class="teamName">{{items.blueTeamName}}</span>
                              <span class="score">弃</span>
                            </template>
                          </template>
                          <template v-else>
                            <span class="teamName">轮空</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">暂空</span>
                        </template>
                      </li>
                    </ul>
                  </template>
                </div>
              </template>
              <!-- END ROUND ONE -->
              <template v-if="item.players.length === 16">
              <div class="round round-two current">
                <div class="round-details">Round 2
                  <br><span class="date">March 16</span>
                </div>
                <template v-for="items in item.players.slice(0,8)">
                  <ul class="matchup">
                    <li class="team team-bottom" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-top" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND TWO -->
              <template v-if="item.players.length === 8">
              <div class="round round-three current">
                <div class="round-details">Round 3
                  <br><span class="date">March 18</span>
                </div>
                <template v-for="items in item.players.slice(0, 4)">
                  <ul class="matchup">
                    <li class="team team-bottom" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-top" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND THREE -->
              <template v-if="item.players.length === 4">
              <div class="round round-four current">
                <div class="round-details">Round 3
                  <br><span class="date">March 22</span>
                </div>
                <template v-for="items in item.players.slice(0, 2)">
                  <ul class="matchup">
                    <li class="team team-bottom" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-top" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND FOUR -->
              <template v-if="item.players.length === 2">
              <div class="round round-five current">
                <div class="round-details">Round 5
                  <br><span class="date">March 22</span>
                </div>
                <template v-for="items in item.players.slice(0, 1)">
                <ul class="matchup">
                  <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                    <template v-if="items.redIsProduce">
                      <template v-if="items.redTeamName">
                        <template v-if="items.redIsSign">
                          <span class="teamName">{{items.redTeamName}}</span>
                          <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                        </template>
                        <template v-else>
                          <span class="teamName">{{items.redTeamName}}</span>
                          <span class="score">弃</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">轮空</span>
                      </template>
                    </template>
                    <template v-else>
                      <span class="teamName">暂空</span>
                    </template>
                  </li>
                  <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                    <template v-if="items.blueIsProduce">
                      <template v-if="items.blueTeamName">
                        <template v-if="items.blueIsSign">
                          <span class="teamName">{{items.blueTeamName}}</span>
                          <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                        </template>
                        <template v-else>
                          <span class="teamName">{{items.blueTeamName}}</span>
                          <span class="score">弃</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">轮空</span>
                      </template>
                    </template>
                    <template v-else>
                      <span class="teamName">暂空</span>
                    </template>
                  </li>
                </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND Five -->
              <template v-if="item.players.length === 1">
              <div class="round round-six current">
                <div class="round-details">Round 5
                  <br><span class="date">March 22</span>
                </div>
                <ul class="matchup">
                  <li class="team team-top" v-on:mouseover="enter(item.redTeamName)" @mouseleave="leave">
                    <template v-if="item.redIsProduce">
                      <template v-if="item.redTeamName">
                        <template v-if="item.redIsSign">
                          <span class="teamName">{{item.redTeamName}}</span>
                          <span class="score" :class="{score_win:item.redIsWin}">{{item.redTeamScore}}</span>
                        </template>
                        <template v-else>
                          <span class="teamName">{{item.redTeamName}}</span>
                          <span class="score">弃</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">轮空</span>
                      </template>
                    </template>
                    <template v-else>
                      <span class="teamName">暂空</span>
                    </template>
                  </li>
                </ul>
              </div>
              </template>
              <!-- END ROUND Six -->
            </div>
          </template>
          <div class="champion">
        <div class="final">
          <div class="round-details">championship
            <br><span class="date">March 30 - Apr. 1</span>
          </div>
          <ul class="matchup">
            <li class="team team-top" v-on:mouseover="enter(matchList.champion.name)" @mouseleave="leave">
              <template v-if="matchList.champion.name">
                <span class="teamName">{{matchList.champion.name}}</span>
              </template>
              <template v-else>
                <span class="teamName">暂未产生</span>
              </template>
            </li>
          </ul>
        </div>
      </div>
          <template v-for="item in this.sortArray2(matchList.rounds)">
            <div class="split split-two current">
              <template v-if="item.players.length === 1">
                <div class="round round-six current">
                  <div class="round-details">Round 5
                    <br><span class="date">March 22</span>
                  </div>
                  <ul class="matchup">
                    <li class="team team-top" v-on:mouseover="enter(item.blueTeamName)" @mouseleave="leave">
                      <template v-if="item.blueIsProduce">
                        <template v-if="item.blueTeamName">
                          <template v-if="item.blueIsSign">
                            <span class="teamName">{{item.blueTeamName}}</span>
                            <span class="score" :class="{score_win:item.blueIsWin}">{{item.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{item.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </div>
              </template>
              <!-- END ROUND Six -->
              <template v-if="item.players.length === 2">
                <div class="round round-five">
                <div class="round-details">Round 4
                  <br><span class="date">March 22</span>
                </div>
                  <template v-for="items in item.players.slice(1, 2)">
                    <ul class="matchup">
                      <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                        <template v-if="items.redIsProduce">
                          <template v-if="items.redTeamName">
                            <template v-if="items.redIsSign">
                              <span class="teamName">{{items.redTeamName}}</span>
                              <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                            </template>
                            <template v-else>
                              <span class="teamName">{{items.redTeamName}}</span>
                              <span class="score">弃</span>
                            </template>
                          </template>
                          <template v-else>
                            <span class="teamName">轮空</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">暂空</span>
                        </template>
                      </li>
                      <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                        <template v-if="items.blueIsProduce">
                          <template v-if="items.blueTeamName">
                            <template v-if="items.blueIsSign">
                              <span class="teamName">{{items.blueTeamName}}</span>
                              <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                            </template>
                            <template v-else>
                              <span class="teamName">{{items.blueTeamName}}</span>
                              <span class="score">弃</span>
                            </template>
                          </template>
                          <template v-else>
                            <span class="teamName">轮空</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">暂空</span>
                        </template>
                      </li>
                    </ul>
                  </template>
              </div>
              </template>
              <!-- END ROUND THREE -->
              <template v-if="item.players.length === 4">
              <div class="round round-four current">
                <div class="round-details">Round 3
                  <br><span class="date">March 22</span>
                </div>
                <template v-for="items in item.players.slice(2)">
                  <ul class="matchup">
                    <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND THREE -->
              <template v-if="item.players.length === 8">
              <div class="round round-three current">
                <div class="round-details">Round 2
                  <br><span class="date">March 18</span>
                </div>
                <template v-for="items in item.players.slice(4)">
                  <ul class="matchup">
                    <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND TWO -->
              <template v-if="item.players.length === 16">
              <div class="round round-two current">
                <div class="round-details">Round 1
                  <br><span class="date">March 16</span>
                </div>
                <template v-for="items in item.players.slice(8)">
                  <ul class="matchup">
                    <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND ONE -->
              <template v-if="item.players.length === 32">
              <div class="round round-one current">
                <div class="round-details">Round 1
                  <br><span class="date">March 16</span>
                </div>
                <template v-for="items in item.players.slice(16)">
                  <ul class="matchup">
                    <li class="team team-top" v-on:mouseover="enter(items.redTeamName)" @mouseleave="leave">
                      <template v-if="items.redIsProduce">
                        <template v-if="items.redTeamName">
                          <template v-if="items.redIsSign">
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score" :class="{score_win:items.redIsWin}">{{items.redTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.redTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                    <li class="team team-bottom" v-on:mouseover="enter(items.blueTeamName)" @mouseleave="leave">
                      <template v-if="items.blueIsProduce">
                        <template v-if="items.blueTeamName">
                          <template v-if="items.blueIsSign">
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score" :class="{score_win:items.blueIsWin}">{{items.blueTeamScore}}</span>
                          </template>
                          <template v-else>
                            <span class="teamName">{{items.blueTeamName}}</span>
                            <span class="score">弃</span>
                          </template>
                        </template>
                        <template v-else>
                          <span class="teamName">轮空</span>
                        </template>
                      </template>
                      <template v-else>
                        <span class="teamName">暂空</span>
                      </template>
                    </li>
                  </ul>
                </template>
              </div>
              </template>
              <!-- END ROUND ONE -->
            </div>
          </template>
        </div>
    </div>

    </div>
    <!---->
  </div>
</template>
<style scoped>
  .container2{
    display: inline-block;
  }
  #bracket:-webkit-full-screen {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  #bracket {
    position: relative;
    background-color: #272a33;
    font-size: 12px;
    padding: 40px 0;
    width: 1100px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
  }
  .container {
    cursor: move;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    text-align: center;
    position: absolute;
    height: 1300px;
    width: 2500px;
    left: 0px;
    top: 0px;
  }
  @media screen and (min-width: 960px) and (max-width: 1199px) {

  }
  @media screen and (min-width: 1920px) and (max-width: 1199px) {

  }
  #bracket:-webkit-full-screen .container2{
    transform: scale(1);
    /*width: 2000px;*/
  }
  #bracket ul>li{float: none;}

  .hero h1 {
    font-family: 'Holtwood One SC', serif;
    font-weight: normal;
    font-size: 5.4em;
    margin: 0 0 20px;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  .hero p {
    font-family: 'Abel', sans-serif;
    text-transform: uppercase;
    color: #5CCA87;
    letter-spacing: 6px;
    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
    font-size: 1.2em;
  }

  .hero p.year i {
    font-size: 14px;
    vertical-align: middle;
  }


  .container2>div{float: left;}
  .split {
  }
  .champion {
    padding-top: 400px;
    width: 150px;
    text-align: center;
  }

  .round {
    display: block;
    float: left;
    width: 170px;
  }
  .split-two {
    margin-left: 0px;
  }
  .split-one .round {
    margin: 0 23px 0 0;
  }
  .split-two .round {
    margin: 0 0 0 23px;
  }
  .matchup {
    margin: 0;
    width: 100%;
    padding: 10px 0;
    height: 60px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    position: relative;
  }
  .score {
    font-size: 11px;
    width: 25px;
    height: 25px;
    text-align: center;
    display: block;
    background-color: rgb(120,122,128);
    color: #fff;
    position: absolute;
    right: 0px;
    top:0px;
    border-radius: 4px;
  }
  #bracket .score_win{
    background-color: rgb(203,98,40);
    color: #333;
  }
  .team {
    z-index:9;
    padding: 0 5px;
    height: 25px;
    margin: 2px auto;
    line-height: 25px;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: 0.5s;
    text-align: left;
    background-color: #313b4f;
    color: #7fc5fe;
  }
  .team-top{}
  .split-one .round-one ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 20px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-left: none;
    left: 170px;
    top: 40px;
    box-sizing: border-box;
  }
  .split-one .round-one ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 20px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 40px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-one .round-two ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 60px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-left: none;
    left: 170px;
    top: 80px;
    box-sizing: border-box;
  }
  .split-one .round-two ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 60px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 80px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-one .round-three ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 150px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-left: none;
    left: 170px;
    top: 160px;
    box-sizing: border-box;
  }
  .split-one .round-three ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 150px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 160px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-one .round-four ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 300px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-left: none;
    left: 170px;
    top: 320px;
    box-sizing: border-box;
  }
  .split-one .round-four ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 300px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 320px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-one .round-six ul:after{
    content: '';
    position: absolute;
    width: 104px;
    height: 1px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 640px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-one .round-six ul:before{
    content: '';
    position: absolute;
    width: 104px;
    height: 1px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 640px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-two .round-one ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 20px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-right: none;
    right: 170px;
    top: 40px;
    box-sizing: border-box;
  }
  .split-two .round-one ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 20px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 40px;
    border-top: none;
    border-right: none;
    box-sizing: border-box;
  }
  .split-two .round-two ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 60px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-right: none;
    right: 170px;
    top: 80px;
    box-sizing: border-box;
  }
  .split-two .round-two ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 60px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 80px;
    border-top: none;
    border-right: none;
    box-sizing: border-box;
  }
  .split-two .round-three ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 150px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-right: none;
    right: 170px;
    top: 160px;
    box-sizing: border-box;
  }
  .split-two .round-three ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 150px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 160px;
    border-top: none;
    border-right: none;
    box-sizing: border-box;
  }
  .split-two .round-four ul:nth-child(even):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 300px;
    border: 1px solid #4a505f;
    border-bottom: none;
    border-right: none;
    right: 170px;
    top: 320px;
    box-sizing: border-box;
  }
  .split-two .round-four ul:nth-child(odd):after{
    content: '';
    position: absolute;
    width: 104px;
    height: 300px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 320px;
    border-top: none;
    border-right: none;
    box-sizing: border-box;
  }
  .split-two .round-six ul:after{
    content: '';
    position: absolute;
    width: 104px;
    height: 1px;
    border: 1px solid #4a505f;
    left: 170px;
    bottom: 640px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .split-two .round-six ul:before{
    content: '';
    position: absolute;
    width: 104px;
    height: 1px;
    border: 1px solid #4a505f;
    right: 170px;
    bottom: 640px;
    border-top: none;
    border-left: none;
    box-sizing: border-box;
  }
  .round-two .matchup {
    margin: 0;
    height: 60px;
    padding: 50px 0;
  }
  .round-three .matchup {
    margin: 0;
    height: 60px;
    padding: 130px 0;
  }
  .round-four .matchup {
    margin: 0;
    height: 60px;
    padding: 290px 0;
  }
  .round-five .matchup {
    margin: 0;
    height: 60px;
    padding: 610px 0;
  }
  .round-six .matchup {
    margin: 0;
    height: 30px;
    padding: 625px 0;
  }
  .final .matchup{margin-top: 40%;}
  .round-details {
    display: none;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 13px;
    color: #2C7399;
    text-transform: uppercase;
    text-align: center;
    height: 40px;
  }
  .champion li,
  .round li {
  }
  .champion li{text-align: center;}
  .current li {
    opacity: 1;
  }
  .current li.team {
  }

  .share .container {
    margin: 0 auto;
    text-align: center;
  }

  .final {
    margin-top: 40%;
  }
  .hover-active{background-color: #171d2a !important;}

</style>
<script>
  export default {
    data: function () {
      return {
        matchList: JSON.parse('{\n' +
          '    "champion": {\n' +
          '        "match_id": "4b85e74c87554d4a96abe9df45f028d6",\n' +
          '        "name": "XRGaming",\n' +
          '        "logo": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '        "playerId": "1011"\n' +
          '    },\n' +
          '    "rounds": [\n' +
          '        {\n' +
          '            "start_time": "2017-12-06 15:20:00",\n' +
          '            "players": [\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/05/rBDcXFlDqFGAJv62AAA9Ez-61Qs691.jpg",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "Yh女子战队",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "41caba9074ad4a168621ad398bdad313",\n' +
          '                    "redHref": "/team/info/1004",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngcaGABfkMAAApSzue9fs283.jpg",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "DOL",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "39cffaa667ce4d3181cbb760a1397e05",\n' +
          '                    "redHref": "/team/info/1010",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "MMMgaming",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "60249b3a24c34e0aae8e9551e5d49b95",\n' +
          '                    "redHref": "/team/info/1027",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "PNGgaming",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "356a729412694db489e2144c44e6517a",\n' +
          '                    "redHref": "/team/info/1029",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngdWWAKHr8AAA-LkfSt2U488.jpg",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "鱼丸粗面",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "c3772291492b4c2894aed98b81f745af",\n' +
          '                    "redHref": "/team/info/b463e39c2110469c943905ca75feeaed",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "ANG",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "441a082c740b48b7a6e4162ce22f6834",\n' +
          '                    "redHref": "/team/info/1012",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1031",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "HiGirl",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "喵星人",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "c3468c9f09c14df29c3a0f866eddcf95",\n' +
          '                    "redHref": "/team/info/1026",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/09/rBDcXFluy8-AYSmbAAAjHGfws6c677.png",\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngcgaAGan0AAB6C2k9s-8749.jpg",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1024",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "AEgaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "p!nk",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "0aa9e99c6183491f9d694004b4da6c46",\n' +
          '                    "redHref": "/team/info/17be4855800c432bbd1c9b3bf70d4acd",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "德州游骑兵",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "84a2a2114f0849c2bc5798a098eed1f5",\n' +
          '                    "redHref": "/team/info/1002",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "柠檬萌不萌",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "a1587e06158e4eb59e5f9d3478a580d7",\n' +
          '                    "redHref": "/team/info/1023",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://116.62.233.197/M00/00/03/rBDcXFkleT-AZ_2sAAB28mmnbWs838.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/8d1258c988b046288abb17b07668d738",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "Orden丨灬哈哈丶",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "NYF",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "0ecdb28e50b64fdeb410279c81d03671",\n' +
          '                    "redHref": "/team/info/1030",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": null,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "XRGaming",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "4c93f2b1952b48b4bae079e423142982",\n' +
          '                    "redHref": "/team/info/1011",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "FOROX",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "87ca4ea4b54f4f5fbdb804a9ad79c699",\n' +
          '                    "redHref": "/team/info/1032",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://116.62.233.197/M00/00/04/rBDcXFkwBaKAMmt-AAAgVTOWtP8655.jpg",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "人生似梦",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "7f056faf2fe54ab196585cc9206f983f",\n' +
          '                    "redHref": "/team/info/1007",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngclqAa5g6AAA6T0xzD_8102.jpg",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/4aa54d129d83456d9906e00ed35b5531",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "灬卜娃娃灬",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "大白熊",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "28c8042fdf2a47d99fd300efcabf7d9a",\n' +
          '                    "redHref": "/team/info/1025",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "浦东幼稚园",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "520eace1d0f24e5b96c46bcb42f709bd",\n' +
          '                    "redHref": "/team/info/1028",\n' +
          '                    "status": 6\n' +
          '                }\n' +
          '            ],\n' +
          '            "bo": 1,\n' +
          '            "round_num": 1\n' +
          '        },\n' +
          '        {\n' +
          '            "start_time": null,\n' +
          '            "players": [\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/05/rBDcXFlDqFGAJv62AAA9Ez-61Qs691.jpg",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngcaGABfkMAAApSzue9fs283.jpg",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1010",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "DOL",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "Yh女子战队",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "3ae240b73d414db4b2ba8ea0334ff666",\n' +
          '                    "redHref": "/team/info/1004",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1029",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "PNGgaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "MMMgaming",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "82100bafea714dd7ab34fa2260f296ef",\n' +
          '                    "redHref": "/team/info/1027",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1012",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "ANG",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "901cf7a302cc4804a64838062b6a3011",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngcgaAGan0AAB6C2k9s-8749.jpg",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1024",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "AEgaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "05c4e89faab64ae1a2ef05b86150d4ac",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1023",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "柠檬萌不萌",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "德州游骑兵",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "9fab64a5519b4409b9766c0cc5f1a377",\n' +
          '                    "redHref": "/team/info/1002",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1011",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "XRGaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "622125ffc5e641acb3524fc70ea17423",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "48cc3fd686c34c52a13a77317fef78f5",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "c02635858aef428ea7745b4a7db50506",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 6\n' +
          '                }\n' +
          '            ],\n' +
          '            "bo": 1,\n' +
          '            "round_num": 2\n' +
          '        },\n' +
          '        {\n' +
          '            "start_time": null,\n' +
          '            "players": [\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "35dcdb4eb0c843db89450f9c306f06b5",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/17/rBDcXFngcgaAGan0AAB6C2k9s-8749.jpg",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1024",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "AEgaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "ANG",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "ae179bbca4d044bcad5286bdf6582d5c",\n' +
          '                    "redHref": "/team/info/1012",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1011",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "XRGaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "da114eb5cd234edb88466aebb0399c2f",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 5\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "4710e1d15a214edd8dc189b887969554",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 6\n' +
          '                }\n' +
          '            ],\n' +
          '            "bo": 1,\n' +
          '            "round_num": 3\n' +
          '        },\n' +
          '        {\n' +
          '            "start_time": null,\n' +
          '            "players": [\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "de99551565054189972ae2ea858c52e6",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 6\n' +
          '                },\n' +
          '                {\n' +
          '                    "redTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsWin": 0,\n' +
          '                    "blueTeamPic": null,\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": null,\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": "XRGaming",\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 1,\n' +
          '                    "scheduleId": "20ccf354051643d585790f4f91c94a9a",\n' +
          '                    "redHref": "/team/info/1011",\n' +
          '                    "status": 5\n' +
          '                }\n' +
          '            ],\n' +
          '            "bo": 1,\n' +
          '            "round_num": 4\n' +
          '        },\n' +
          '        {\n' +
          '            "start_time": null,\n' +
          '            "players": [\n' +
          '                {\n' +
          '                    "redTeamPic": null,\n' +
          '                    "blueIsWin": 1,\n' +
          '                    "blueTeamPic": "http://image.cccgaming.com/M00/00/00/rBDcXFkabSKAO1CtAAAkdAnrmss157.png",\n' +
          '                    "blueIsSign": false,\n' +
          '                    "blueHref": "/team/info/1011",\n' +
          '                    "redTeamScore": 0,\n' +
          '                    "bo": 1,\n' +
          '                    "blueTeamName": "XRGaming",\n' +
          '                    "redIsProduce": true,\n' +
          '                    "redIsSign": false,\n' +
          '                    "blueIsProduce": true,\n' +
          '                    "redTeamName": null,\n' +
          '                    "blueTeamScore": 0,\n' +
          '                    "redIsWin": 0,\n' +
          '                    "scheduleId": "992fb3c8de704d0386151d976ab046a5",\n' +
          '                    "redHref": "/team/info/",\n' +
          '                    "status": 5\n' +
          '                }\n' +
          '            ],\n' +
          '            "bo": 1,\n' +
          '            "round_num": 5\n' +
          '        }\n' +
          '    ]\n' +
          '}')
      }
    },
    methods: {
      sortArray: function (val) {
        return val.sort(function (a, b) {
          return b.players.length - a.players.length
        })
      },
      sortArray2: function (val) {
        return val.sort(function (a, b) {
          return a.players.length - b.players.length
        })
      },
      getArray: function (val, start, end) {
        return val.slice(start, end)
      },
      enter: function (val) {
        let temp = document.getElementsByClassName('team')
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].firstElementChild.innerHTML === val) {
            temp[i].classList.add('hover-active')
          }
        }
      },
      leave: function () {
        let temp = document.getElementsByClassName('team')
        for (let i = 0; i < temp.length; i++) {
          temp[i].classList.remove('hover-active')
        }
      },
      requestFullScreen: function (element) {
        // eslint-disable-next-line
        var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (requestMethod) {
          requestMethod.call(element)
        } else if (typeof window.ActiveXObject !== 'undefined') {
          // eslint-disable-next-line
          var wscript = new ActiveXObject('WScript.Shell')
          if (wscript !== null) {
            wscript.SendKeys('{F11}')
          }
        }
      },
      fullScreen: function () {
        this.requestFullScreen(document.getElementById('bracket'))
      }
      // dragFunc: function (id) {
      //   var Drag = document.getElementById(id)
      //   Drag.onmousedown = function (event) {
      //     var ev = event || window.event
      //     event.stopPropagation()
      //     var disX = ev.clientX - Drag.offsetLeft
      //     var disY = ev.clientY - Drag.offsetTop
      //     document.onmousemove = function (event) {
      //       var ev = event || window.event
      //       Drag.style.left = ev.clientX - disX + 'px'
      //       Drag.style.top = ev.clientY - disY + 'px'
      //       Drag.style.cursor = 'move'
      //     }
      //   }
      //   Drag.onmouseup = function () {
      //     document.onmousemove = null
      //     this.style.cursor = 'default'
      //   }
      // }
    },
    created: function () {
      // this.dragFunc('idOuterDiv')
    }
  }
</script>
