export default /* replace everything in the string with the contents of blocks.xml (replace .s4w with .zip and open). make sure to backslash all ` and ${ (ctrl + h to open replace menu) */ `
  <xml xmlns="https://developers.google.com/blockly/xml">
    <variables></variables>
    <block type="html_doctype" id="CE/YVawYY.(OeHQHHy$:" x="522" y="135">
      <value name="LANG">
        <block type="general_lang" id="E7mQII3R./KBxVEdRD.z">
          <field name="lang">en</field>
        </block>
      </value>
      <statement name="head">
        <block type="html_comment" id="nA{wl[{u.}U!.6L!4DPi">
          <value name="TEXT">
            <block type="general_textinput" id="bt+dWY~Lf!Ab?u=p;Ol$">
              <field name="TEXT">Example of the use of the head tag</field>
            </block>
          </value>
          <next>
            <block type="css_fontimport" id="[p3v.lTrK;nY,\`-T{Q3J">
              <value name="url">
                <block type="general_textinput" id="DbDRm/Qo+9bbrB1pJd@j">
                  <field name="TEXT">https://fonts.googleapis.com/css2?family=Heebo:wght@900&amp;family=Lato:ital,wght@1,100&amp;family=Roboto+Slab:wght@800&amp;family=Source+Sans+Pro:wght@200&amp;display=swap</field>
                </block>
              </value>
              <next>
                <block type="html_websitetext" id="KP2?+dniNY-/*.}AJKmj">
                  <value name="TEXT">
                    <block type="general_textinput" id="/94,dNS$?yg%(%6_daoi">
                      <field name="TEXT">S4D WEB</field>
                    </block>
                  </value>
                  <next>
                    <block type="html_comment" id="]%J#waVu.[j7vD,v,X=l">
                      <value name="TEXT">
                        <block type="general_textinput" id="q$NvvC_b}lwa=E]Lp-E,">
                          <field name="TEXT">Example of the use of css styling</field>
                        </block>
                      </value>
                      <next>
                        <block type="html_cjs" id=")y)V0_~sj[XPh\`2PkqJ0">
                          <statement name="STATEMENTS">
                            <block type="css_class" id="T6,\`(L~-Ow~?m4lCZNfe">
                              <value name="TEXT">
                                <block type="general_textinput" id="o6gRnz2^/$2vhqLps-HE">
                                  <field name="TEXT">Button</field>
                                </block>
                              </value>
                              <statement name="STATEMENTS">
                                <block type="html_fontsize" id="gtS!%uyP!=d,{D9-M/_)">
                                  <value name="TEXT">
                                    <block type="general_textinput" id="~r}$.VF4r.@BH@D[^=Zv">
                                      <field name="TEXT">100</field>
                                    </block>
                                  </value>
                                  <next>
                                    <block type="css_fontname" id="4Gf^Qw_Apo+VcNcZ:Paq">
                                      <value name="url">
                                        <block type="general_textinput" id="dkjqGq{+m#7T!4-vBU](">
                                          <field name="TEXT">'Source Sans Pro', sans-serif</field>
                                        </block>
                                      </value>
                                      <next>
                                        <block type="html_color" id="7ZCmy=BBvlBS#B@6T}!H">
                                          <value name="color">
                                            <block type="general_color" id=":Fo$#xpQYc;pl2]6M*5M">
                                              <field name="color">white</field>
                                            </block>
                                          </value>
                                          <next>
                                            <block type="general_margin" id="l/Bv}d98D4+XK/4+%UF3">
                                              <value name="margin">
                                                <block type="general_margi" id="fYU(a:^?d[Zgv,%]Y.]w">
                                                  <field name="margin">top</field>
                                                </block>
                                              </value>
                                              <value name="marginpx">
                                                <block type="general_textinput" id="CY[R(O}]*kP0;#,)kHmE">
                                                  <field name="TEXT">30</field>
                                                </block>
                                              </value>
                                            </block>
                                          </next>
                                        </block>
                                      </next>
                                    </block>
                                  </next>
                                </block>
                              </statement>
                              <next>
                                <block type="css_class" id=":.|TfS|Vbej4|#2DS{MR">
                                  <value name="TEXT">
                                    <block type="general_textinput" id="r/u!I9*q=8kZ|9?zE4LQ">
                                      <field name="TEXT">nav</field>
                                    </block>
                                  </value>
                                  <statement name="STATEMENTS">
                                    <block type="html_fontsize" id="$bUrpouOy8#B!.fUF~wt">
                                      <value name="TEXT">
                                        <block type="general_textinput" id=")c$ujpcw[\`fDRV;u{GjF">
                                          <field name="TEXT">20</field>
                                        </block>
                                      </value>
                                      <next>
                                        <block type="html_color" id="_QQbLfJF}f{H.87=.zl*">
                                          <value name="color">
                                            <block type="general_color" id="VggTqN|y.aHE%{DJ-_0j">
                                              <field name="color">white</field>
                                            </block>
                                          </value>
                                        </block>
                                      </next>
                                    </block>
                                  </statement>
                                </block>
                              </next>
                            </block>
                          </statement>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </next>
        </block>
      </statement>
      <statement name="body">
        <block type="html_rcontainer" id="5~r~I$TQu5S3:8DZvQ,(">
          <statement name="STATEMENTS">
            <block type="html_comment" id="l.!pT5N8Yud3D-x6SC}Q">
              <value name="TEXT">
                <block type="general_textinput" id="#L5-MbK:5!Hr52q7RAe_">
                  <field name="TEXT">Top of the page logo and navigation</field>
                </block>
              </value>
              <next>
                <block type="html_div" id="hJf)@GA,FBii*d9=Q%q^">
                  <field name="CSS">class</field>
                  <value name="TYPE">
                    <block type="general_textinput" id="dmA#2YhD[tnQ/}8)PR5j">
                      <field name="TEXT">nav</field>
                    </block>
                  </value>
                  <statement name="STATEMENTS">
                    <block type="bs5_navcenter" id="AISPHu~C=G9N{9EYw#WA">
                      <statement name="STATEMENTS">
                        <block type="bs5_textnav" id="hhu9WOyZp9_2wFo+}EkI">
                          <value name="TYPE">
                            <block type="general_textinput" id="z-5s#UJ7bIU;{!U%^^@y">
                              <field name="TEXT">S4D WEB</field>
                            </block>
                          </value>
                          <value name="url">
                            <block type="general_textinput" id="au!R:KAX)Ux$$JiXFayE">
                              <field name="TEXT">https://google.com</field>
                            </block>
                          </value>
                          <value name="color">
                            <block type="general_color" id="I(GYW+c1Ab0F?}KaeR#+">
                              <field name="color">orange</field>
                            </block>
                          </value>
                          <value name="textdec">
                            <block type="rtific" id="0+:;wa+p;6th5%!CS}=?">
                              <field name="rtific">none</field>
                            </block>
                          </value>
                          <next>
                            <block type="bs5_item" id="AWwSgbgP$0d[bj4%E58;">
                              <value name="url">
                                <block type="general_textinput" id="dhZX))Fa[^mCx#C-nX:R">
                                  <field name="TEXT">https://example.com</field>
                                </block>
                              </value>
                              <value name="navtext">
                                <block type="general_textinput" id="4F40Ws6}QIwNUGoG#OK6">
                                  <field name="TEXT">Home</field>
                                </block>
                              </value>
                              <value name="color">
                                <block type="general_color" id=":2.mAlvkz-ya_Z^6\`jy{">
                                  <field name="color">black</field>
                                </block>
                              </value>
                              <next>
                                <block type="bs5_item" id="vV$i7ozAVuk[P[$f=8,o">
                                  <value name="navtext">
                                    <block type="general_textinput" id="$XfdN!d97!RrW)9P%[^A">
                                      <field name="TEXT">About Us</field>
                                    </block>
                                  </value>
                                  <value name="color">
                                    <block type="general_color" id="k\`9hP*VF0m19!DI};_%@">
                                      <field name="color">black</field>
                                    </block>
                                  </value>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </statement>
                    </block>
                  </statement>
                  <next>
                    <block type="html_comment" id="FKbCl@j9+t?-f}q^R,V_">
                      <value name="TEXT">
                        <block type="general_textinput" id="U)9%(3T3!rheQ)pxr(Y)">
                          <field name="TEXT">Example of how to format buttons and  containers</field>
                        </block>
                      </value>
                      <next>
                        <block type="html_div" id="u!kd=!An,#o+M0Ymi.B,">
                          <field name="CSS">class</field>
                          <value name="TYPE">
                            <block type="general_textinput" id="_!zF5y}!yh!Gan5e%U.#">
                              <field name="TEXT">Button</field>
                            </block>
                          </value>
                          <statement name="STATEMENTS">
                            <block type="html_head" id="$T]2yH~B4nrV2qv4Gna1">
                              <statement name="STATEMENTS">
                                <block type="html_bordercontainer" id="rh(XyIJgnuFy5p:uyd~f">
                                  <value name="COLOR">
                                    <block type="containercolor" id="TypWPRbPWJ[0A4@$jBzD">
                                      <field name="color">bg-warning</field>
                                    </block>
                                  </value>
                                  <statement name="STATEMENTS">
                                    <block type="html_text" id="%3nO9{x3u0Agsc\`|2ZBh">
                                      <value name="TEXT">
                                        <block type="general_textinput" id="E9TWrG~v*2M:a;ieA+/2">
                                          <field name="TEXT">Making Coding Easier!</field>
                                        </block>
                                      </value>
                                    </block>
                                  </statement>
                                  <next>
                                    <block type="bungie_button" id="XWtyBnf2;mXp*wIio]l%">
                                      <value name="text">
                                        <block type="general_textinput" id="j4-uoqc6ePj^vX\`o2tmc">
                                          <field name="TEXT">See More</field>
                                        </block>
                                      </value>
                                      <value name="url">
                                        <block type="general_textinput" id="Tu9gPrc*a9wb6d]vBLUl">
                                          <field name="TEXT">google.com</field>
                                        </block>
                                      </value>
                                      <value name="color">
                                        <block type="general_color" id="urx*FFVoQG8yNCst\`8:Z">
                                          <field name="color">black</field>
                                        </block>
                                      </value>
                                      <value name="textcolor">
                                        <block type="general_color" id="qnX6}6SqJvz!k9e8Y=)\`">
                                          <field name="color">white</field>
                                        </block>
                                      </value>
                                    </block>
                                  </next>
                                </block>
                              </statement>
                            </block>
                          </statement>
                          <next>
                            <block type="html_comment" id="KMg$T,hmFo)D_ofV!_/F">
                              <value name="TEXT">
                                <block type="general_textinput" id="|b!Bt_~SN[+\`SlX:XX/Z">
                                  <field name="TEXT">Example of how to use tables</field>
                                </block>
                              </value>
                              <next>
                                <block type="html_div" id="^q\`$H#YPfc72_JR:A!KS">
                                  <field name="CSS">class</field>
                                  <value name="TYPE">
                                    <block type="general_textinput" id="CIp2]-+=}16n{*T$Dtk|">
                                      <field name="TEXT">table</field>
                                    </block>
                                  </value>
                                  <statement name="STATEMENTS">
                                    <block type="bs5_table" id="}*k4a:ebzE)tN9\`^,Md)">
                                      <value name="TEXT">
                                        <block type="tabletypes" id="|5G$DX71PC39HO)\`[@g)">
                                          <field name="types">table-bordered</field>
                                        </block>
                                      </value>
                                      <statement name="statements">
                                        <block type="bs5_tablec" id=",5W#0PKVnDrL~M?\`i{5[">
                                          <statement name="statements">
                                            <block type="bs5_tableheader" id="35tdk|n4GtsyWz^OQD8*">
                                              <statement name="TEXT">
                                                <block type="html_text" id="eIF2It$B+[dLu4oyn$gq">
                                                  <value name="TEXT">
                                                    <block type="general_textinput" id="?IzqsL!1Jzfn5y=BznEX">
                                                      <field name="TEXT">Features</field>
                                                    </block>
                                                  </value>
                                                </block>
                                              </statement>
                                              <next>
                                                <block type="bs5_tableheader" id="d1QpInXR:Tm_x=ddJ~dJ">
                                                  <statement name="TEXT">
                                                    <block type="html_text" id="1*m_%[;tUI|D$JLvG6_L">
                                                      <value name="TEXT">
                                                        <block type="general_textinput" id="_%C\`IcQfmra|5c$B7(bM">
                                                          <field name="TEXT">Example</field>
                                                        </block>
                                                      </value>
                                                    </block>
                                                  </statement>
                                                  <next>
                                                    <block type="bs5_tableheader" id="(kyDLToEMLxsuX$2FTpr">
                                                      <statement name="TEXT">
                                                        <block type="html_text" id="xGFgC}M1f8L*}8mv?P9W">
                                                          <value name="TEXT">
                                                            <block type="general_textinput" id="F,h6PUHhk7H:f\`5wZ-!!">
                                                              <field name="TEXT">Example</field>
                                                            </block>
                                                          </value>
                                                        </block>
                                                      </statement>
                                                    </block>
                                                  </next>
                                                </block>
                                              </next>
                                            </block>
                                          </statement>
                                        </block>
                                      </statement>
                                      <statement name="statementsbody">
                                        <block type="bs5_tablebody" id="INqYfYjoF=-{gf0)dY+U">
                                          <statement name="TEXT">
                                            <block type="bs5_tablebodycontent" id="N:1(9YpgYFr,%nR;%UCk">
                                              <statement name="TEXT">
                                                <block type="html_text" id="PacXRD$VEI{;jrxZJ*X$">
                                                  <value name="TEXT">
                                                    <block type="general_textinput" id="1vt!D^@a*W*F@K:G.Hfg">
                                                      <field name="TEXT">Bootstrap 5</field>
                                                    </block>
                                                  </value>
                                                </block>
                                              </statement>
                                              <next>
                                                <block type="bs5_tablebodycontent" id="cF@h.NUHLf|*?yLoC}]S">
                                                  <statement name="TEXT">
                                                    <block type="html_text" id="E4!=hHnm].r00sZvahT~">
                                                      <value name="TEXT">
                                                        <block type="general_textinput" id="QWbe}zG$k=F-^uo2BSlr">
                                                          <field name="TEXT">Bungie CSS</field>
                                                        </block>
                                                      </value>
                                                    </block>
                                                  </statement>
                                                  <next>
                                                    <block type="bs5_tablebodycontent" id="ErFycNBM!lf!v3K2=}g[">
                                                      <statement name="TEXT">
                                                        <block type="html_text" id="(rMAz7T5Btfsj@rFAvV7">
                                                          <value name="TEXT">
                                                            <block type="general_textinput" id="h!#{\`NDVPS#:T)C*=aZk">
                                                              <field name="TEXT">Responsive Designs</field>
                                                            </block>
                                                          </value>
                                                        </block>
                                                      </statement>
                                                    </block>
                                                  </next>
                                                </block>
                                              </next>
                                            </block>
                                          </statement>
                                        </block>
                                      </statement>
                                    </block>
                                  </statement>
                                </block>
                              </next>
                            </block>
                          </next>
                        </block>
                      </next>
                    </block>
                  </next>
                </block>
              </next>
            </block>
          </statement>
        </block>
      </statement>
    </block>
  </xml>`