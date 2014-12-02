//uelike.com
//Code By SageChan

$(function(){

	//config
	var isTap = /mobile/.test(navigator.userAgent.toLowerCase()),
	config ={
		w:0,
		h:0,
		render:function(v,el,fn,callback,elseback){
			var renderI = 0 ,renderInit,d;
			if(v>$(el).offset().top-config.h){
				renderInit = v - ((isTap)?$(el).offset().top-config.h-100:$(el).offset().top-config.h-150);
				(renderInit/($(el).height()+config.h*0.2)>=1)?renderI=1:renderI = renderInit/($(el).height()+config.h*0.2);
				//running
				fn(renderI);
				
				if(renderI==1){
					$(el).addClass('inview');
					if(callback!==undefined){
						callback();
					}
				}else{
					$(el).removeClass('inview');
					if(elseback!==undefined){
						elseback();
					}
				}
				
			}
		}
	},
	pointerData = [
		[[28,123],[130,41]],
		[[181,26],[345,32]],
		[[379,44],[462,127]],
		[[485,172],[498,247]],
		[[500,286],[468,398]],
		[[24,172],[44,412]],
		[[91,443],[210,387]],
		[[430,415],[275,380]],
		[[73,418],[156,272]],
		[[172,272],[220,336]],
		[[440,400],[396,340]],
		[[484,276],[400,320]],
		[[40,161],[153,253]],
		[[172,248],[216,172]],
		[[207,152],[45,147]],
		[[44,135],[345,38]],
		[[348,48],[256,133]],
		[[272,188],[252,168]],
		[[328,176],[360,54]],
		[[364,216],[460,164]],
		[[364,244],[483,266]],
		[[345,275],[375,319]],
		[[288,280],[256,332]],
		[[256,244],[180,260]]
	],
	init = function(){
		//init
		config.w = $(window).width();
		config.h = $(window).height();
		if(isTap){
			$(window).scrollTop(0);
			$('header').css('position','relative');
			$('#intro').css('marginTop',0);
			$('#who_2').css('paddingBottom',0);
			$('html').css({'width':config.w,'height':config.h,'overflow':'hidden'});
		}else{
			if(window.location.href.indexOf('#!/')>0){
				var v = window.location.hash.replace('#!/','');
				$('html,body').stop().animate({scrollTop:$('#'+v).offset().top},600);
			}else{
				$('html,body').stop().animate({scrollTop:0},600);
			}
			
		}
		
		$('.who1_cl span').eq(0).trigger((isTap)?'touchstart':'click');
		$('.solution_tab li').eq(0).trigger((isTap)?'touchstart':'mouseenter');
		
		var caseListW = 0;
		$('.case_list li').each(function(){
			caseListW+=$(this).width();
		});
		$('.case_list ul').width(caseListW);
		
		$('.case_move').width(config.w/caseListW*config.w);
		
		
		
		var render = function(v){
			//视差滚动
			
			//#who_1 .warp			
			config.render(v,'#who_1 .wrap',function(i){
				$('#who_1 .title h4').css('transform','translateY('+(100+(-i*100))+'px)');
				$('#who_1 .title h2,#who_1 .title h3,#who_1 .title p').css('transform','translateY('+(200+(-i*200))+'px)');
			});
			
			
			//#who1_driven
			config.render(v,'#who1_driven',function(i){
				//running
				$('.rotate_back').css('transform','rotate('+(i*360)+'deg)');
				if(i>0.1){
					$('.rotate_front_i2').css('visibility','visible');
				}else{
					$('.rotate_front_i2').css('visibility','hidden');
				}

				if(i>0.4){
					$('.rotate_front_i4').css('visibility','visible');
				}else{
					$('.rotate_front_i4').css('visibility','hidden');
				}
				
				if(i>0.7){
					$('.rotate_front_i3').css('visibility','visible');
				}else{
					$('.rotate_front_i3').css('visibility','hidden');
				}
				if(i>=1){
					$('.rotate_front_i1').css('visibility','visible');
				}else{
					$('.rotate_front_i1').css('visibility','hidden');
				}
				

			});
			
			//who_2
			config.render(v,'#who_2',function(i){
				$('#who_2 .content h3').css('transform','translateY('+(500+(-i*500))+'px)');
				$('#who_2 .content h4,#who_2 .content h5').css('transform','translateY('+(800+(-i*800))+'px)');
				$('#who_2 .content p').css('transform','translateY('+(900-i*900)+'px)');
				
				/*
				if(!isTap){
					function drawPointer(x1,y1,x2,y2,d){
							//var ds = Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
						var k = (y2-y1)/(x2-x1),
						cd = d*(x2-x1),
						kd = k*cd;
						return [cd+x1,kd+y1];
					}

					for(var a = 0; a < pointerData.length ; a++){
						$('#pointer canvas').clearCanvas({
							x:0,
							y:0,
							width:1000,
							height:1000
						});
						for(ll = 0;ll<pointerData.length;ll++){
							$('#pointer canvas').drawLine({
									strokeStyle: 'rgba(255,255,255,'+1+')',
									strokeWidth: 1,
									x1: pointerData[ll][0][0],
									y1: pointerData[ll][0][1],
									x2: drawPointer(pointerData[ll][0][0],pointerData[ll][0][1],pointerData[ll][1][0],pointerData[ll][1][1],i)[0],
									y2: drawPointer(pointerData[ll][0][0],pointerData[ll][0][1],pointerData[ll][1][0],pointerData[ll][1][1],i)[1]
							});
						}
					};
					
				}
				*/

				/*
				(function drawpointer(){
					$('#pointer canvas').drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 28,
						y1: 123,
						x2: 130,
						y2:41
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 181,
						y1: 26,
						x2: 345,
						y2:32
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 379,
						y1: 44,
						x2: 462,
						y2:127
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 485,
						y1: 172,
						x2: 498,
						y2:247
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 500,
						y1: 286,
						x2: 468,
						y2:398
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 24,
						y1: 172,
						x2: 44,
						y2:412
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 91,
						y1: 443,
						x2: 210,
						y2:387
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 430,
						y1: 415,
						x2: 275,
						y2:380
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 73,
						y1: 418,
						x2: 156,
						y2:272
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 172,
						y1: 272,
						x2: 220,
						y2:336
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 440,
						y1: 400,
						x2: 396,
						y2:340
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1: 484,
						y1: 276,
						x2: 400,
						y2:320
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:40,
						y1:161,
						x2:153,
						y2:253
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:172,
						y1:248,
						x2:216,
						y2:172
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:207,
						y1:152,
						x2:45,
						y2:147
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:44,
						y1:135,
						x2:345,
						y2:38
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:348,
						y1:48,
						x2:256,
						y2:133
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:272,
						y1:188,
						x2:252,
						y2:168
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:328,
						y1:176,
						x2:360,
						y2:54
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:364,
						y1:216,
						x2:460,
						y2:164
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:364,
						y1:244,
						x2:483,
						y2:266
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:345,
						y1:275,
						x2:375,
						y2:319
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:288,
						y1:280,
						x2:256,
						y2:332
					}).drawLine({
						strokeStyle: 'rgba(255,255,255,1.0)',
						strokeWidth: 0.1,
						x1:256,
						y1:244,
						x2:180,
						y2:260
					});
					
				}());
				*/
				
			},function(){
				if(isTap){
					parallax2.parallax('enable');
				}else{
					parallax2.parallax('enable');
				}
			},function(){
				parallax2.parallax('disable');
			});
			
			//#who_3 .title
			config.render(v,'#who_3 .wrap',function(i){
				$('#who_3 .title h4').css('transform','translateY('+(500+(-i*500))+'px)');
				$('#who_3 .title h2,#who_3 .title h3,#who_3 .title p').css('transform','translateY('+(700+(-i*700))+'px)');
			});
			
			
			//.media_list
			config.render(v,'.media_list',function(i){
				$('.media_list li').each(function(e){
					
					if(e>$('.media_list li').length-7){
						$(this).css('transform','translateY('+(400+(-i*430))+'%)');
					}else{
						$(this).css('transform','translateY('+(400+(-i*400))+'%)');
					}
				});
			});
			
			//.solution .page_title
			config.render(v,'.solution .wrap',function(i){
				$('.solution .page_title h4').css('transform','translateY('+(100-i*100)+'px)');
				$('.solution .page_title h5').css('transform','translateY('+(300-i*300)+'px)');
			});
			
			//.achievements
			config.render(v,'.achievements',function(i){
				$('.achievements .page_title h4').css('transform','translateY('+(100-i*100)+'px)');
				$('.achievements .page_title h5').css('transform','translateY('+(300-i*300)+'px)');
			});
			
			//.case
			config.render(v,'.case',function(i){
				$('.case .page_title h4').css('transform','translateY('+(100-i*100)+'px)');
				$('.case .page_title h5').css('transform','translateY('+(300-i*300)+'px)');
			});
			
			//.case
			config.render(v,'.partner',function(i){
				$('.partner .page_title h4').css('transform','translateY('+(100-i*100)+'px)');
				$('.partner .page_title h5').css('transform','translateY('+(300-i*300)+'px)');
			});
			

			
			//.solution_more
			config.render(v,'.solution_more',function(i){
				$('.solution_line_l').css('width',''+i*100+'%');
			});
			
			//.cinema
			(function(){
				if(v>$('.cinema').offset().top-config.h&&!isTap){
					var di =( v - ($('.cinema').offset().top-config.h))/2;
					$('.cinemad').css('transform','translateY('+(di-600)+'px)');
					$('.cinema-f').css('transform','translateY('+(-di/2+300)+'px)');
				}
				if(isTap){
					$('.cinema-f').css('backgroundPosition','50% 50%');
				}
			})();

			
			//.achievements .wrap
			config.render(v,'.achievements .wrap',function(i){
				//数字
				var max = parseFloat($('.circle').attr('data-d')),
				v = (Math.round(i*max*10)).toString(),
				va = v.substring(0,2)+'.'+v.charAt(2);
				$('.circle p span').html(va);

				$('.circle canvas').clearCanvas({
					x:0,
					y:0,
					width:1000,
					height:1000
				}).drawArc({
					fillStyle:'#4cc1e9',
					x:115,
					y:115,
					radius:103,
					strokeStyle:'#82d4f0',
					strokeWidth:23
				}).drawArc({
					x:115,
					y:115,
					radius:103,
					strokeStyle:'#fff',
					strokeWidth:23,
					start: 0, end: -Math.PI*2*i*(max/100),
					ccw: true,
					inDegrees: false
				});
				
				$('.achievements_bg').css('transform','translateY('+(i*40)+'px)');
				$('.aripple').css('transform','translateY('+(2000-(i*2000))+'%)');
								
				
				
			});
			
			//.case_content
			config.render(v,'.case_content',function(i){
				$('.case_content').css('width',''+(i*100)+'%');
			});
			
		},pageAnimation = (function(){
			if(isTap){
			
				(function touchAnimation(){
					var th = 0,sy,ey = 0,itm,ito,d = 0,maxHeight = document.body.scrollHeight - $(window).height(),lock = false,mlock = true,moveTo = function(ini,tar){
						clearTimeout(ito);
						var s = ((ini + tar)-$('body').offset().top)/7,n = $('body').offset().top;
						$('body').css({'transform':'translateY('+(n+s)+'px)'});
						
						render($(window).scrollTop());
						if(s<1&&s>-1){
							clearTimeout(ito);
						}else{
							ito = setTimeout(function(){
								moveTo(ini,tar);
							},10);
						}
						
					};
					$(window).bind('touchstart touchmove touchend',function(e){
						
						if(e.type=='touchstart'){
							e.preventDefault();
							ey = 0;
							d = 0;
							clearTimeout(ito);
							th = $('body').offset().top;
							t = e.originalEvent.targetTouches[0];
							if(t.target.className=='case_list_album_msk'||t.target.className=='case_list_info fl'){
								return false;
							}
							sy = t.clientY;
							itm = setInterval(function(){
								d++;
							},1);
							
						}else if(e.type=='touchmove'){
							e.preventDefault();
							var t = e.originalEvent.targetTouches[0];
							if(t.target.className=='case_list_album_msk'||t.target.className=='case_list_info fl'){
								return false;
							}
							ey =  t.clientY - sy ;

							if(ey<0){
								lock = true;
							}else if(ey>0){
								lock = true;
							}else{
								lock = false;
							}
							
							render($(window).scrollTop());
							if(lock&&d<70&&d!=0){
								if((th+ey/2)<=0&&(th+ey/2)>=-maxHeight){
									$('body').css('transform','translateY('+(th+ey/2)+'px)');
								}
							}
							
						}else{
							clearInterval(itm);
							e.preventDefault();
							var sbd = parseInt(ey/2/d*20);
							
							if(Math.abs(sbd)>=15&&d!=0){
								if(($('body').offset().top+sbd)>=0){
									sbd =0;
								}
								if(($('body').offset().top+sbd)<=-maxHeight){
									sbd = -maxHeight - $('body').offset().top;
								}
								moveTo($('body').offset().top,sbd);
							}
							
						}
						
					});
				
					
					
				})();
				
			}else{
				$(window).scroll(function(){
					var t = $(document).scrollTop();
					if(t>=100){
						if($('header').hasClass('fixed')==false){
							$('header').addClass('fixed');
						}
					}else{
						if($('header').hasClass('fixed')){
							$('header').removeClass('fixed');
						}
					}
					render(t);
				});
			}
		
		})();
		
		
		if($('.case_show').height()>=config.h){
			$('.case_show').css({'overflowX':'hidden','overflowY':'auto','height':config.h});
		}
		
	};
	
	$(window).load(init).resize(init);

	
	

	//event
	var parallax1 = $('#scene').parallax(),
	parallax2 = $('#scene2').parallax();
	
	
	(function whoCl(){
		$('.who1_cl span').bind((isTap)?'touchstart':'click',function(){
			if($(this).hasClass('cur')==false){
				var i = $(this).index();
				$('.who1_cl span').removeClass('cur');
				$(this).addClass('cur');
				$('.who1_showcase article').removeClass('show');
				$('.who1_showcase article').eq(i).addClass('show');
			}
		});
	})();
	
	(function drivenOpen(){
		var i = 0;
		
		$('.rotate_front_id').bind((isTap)?'touchstart':'click',function(){
			i = $(this).index();
			$('.who1_driven_open').addClass('show');
			$('.who1_driven_open ul li').eq(i).addClass('show');
		});

		$('.who1_driven_open_cl .next').bind((isTap)?'touchstart':'click',function(){
			(i+1>3)?i=0:i++;
			$('.who1_driven_open ul li').removeClass('show');
			$('.who1_driven_open ul li').eq(i).addClass('show');
		});
		
		$('.who1_driven_open_cl .prev').bind((isTap)?'touchstart':'click',function(){
			(i-1<0)?i=3:i--;
			$('.who1_driven_open ul li').removeClass('show');
			$('.who1_driven_open ul li').eq(i).addClass('show');
		});
		
		$('.who1_driven_open_wrap .close').bind((isTap)?'touchstart':'click',function(){
			$('.who1_driven_open,.who1_driven_open ul li').removeClass('show');
		});
		
	})();
	
	(function slTab(){
		$('.solution_tab li').bind((isTap)?'touchstart':'mouseenter',function(){
			var i = $(this).index(),
			v = $('.solution_tab li').eq(i).offset().left+76;
			$('.solution_line b').css('left',v);
			$('.solution_ct li').eq(i).addClass('show');
			$('.solution_ct li').each(function(){
				if($(this).index()!=i){
					$(this).removeClass('show');
				}
			});
			
		});
	})();
	
	(function caseDrag(){
		var dsx = 0,dex = 0,sx,ex,lock = false,ti = 0,itv,oDrag = (isTap)?'touchstart':'mousedown',bDrag = (isTap)?'touchmove':'mousemove',fDrag = (isTap)?'touchend':'mouseup';
		
		$('.case_list ul').bind(oDrag,function(e){
			e.preventDefault();
			ti = 0;
			document.body.onselectstart = function(){ return false; }
			$('.case_list ul').removeClass('scroll');
			var dx = $('.case_list ul').offset().left||0;
			dsx = (isTap)?e.originalEvent.targetTouches[0].clientX:e.clientX;
			dex = (isTap)?e.originalEvent.targetTouches[0].clientX:e.clientX;
			sx = dsx - dx;
			lock = true;
			$('.case_list ul').addClass('drag');
			itv = setInterval(function(){
				ti++;
			},1);
		});
		$(document).bind(bDrag,function(e){
			if(lock){
				dex = (isTap)?e.originalEvent.targetTouches[0].clientX:e.clientX;
				ex = dex - sx;
				//$('.case_list ul').css('left',ex);
				$('.case_list ul').css('transform','translateX('+ex+'px)');
				(function caseD(){
					var f = -$('.case_move').width()/$(window).width();
					$('.case_move').css('left',$('.case_list ul').offset().left*f);
				}());
			}
		}).bind(fDrag,function(){
			if(lock){
				lock = false;
				clearInterval(itv);
				var spd;
				if(dex - dsx){
					spd = (dex - dsx)/ti;
				}
				
				if(Math.abs(spd)>10){

					$('.case_list ul').addClass('scroll');
					//$('.case_list ul').css('left',$('.case_list ul').offset().left+(spd)*50);
					var dd = (isTap)?5:50;
					$('.case_list ul').css('transform','translateX('+($('.case_list ul').offset().left+(spd)*dd)+'px)');
					setTimeout(function(){
						if($('.case_list ul').offset().left>0){
							//$('.case_list ul').css({'left':0});
							$('.case_list ul').css('transform','translateX('+(0)+'px)');
						}else if($('.case_list ul').offset().left<-($('.case_list ul').width()-$(window).width())){
							//$('.case_list ul').css({'left':-($('.case_list ul').width()-$(window).width())});
							$('.case_list ul').css('transform','translateX('+(-($('.case_list ul').width()-$(window).width()))+'px)');
						}

					},200);
					
				}
				document.body.onselectstart = function(){ return true; }
				$('.case_list ul').removeClass('drag');
						if($('.case_list ul').offset().left>0){
							//$('.case_list ul').css({'left':0});
							$('.case_list ul').css('transform','translateX('+(0)+'px)');
						}else if($('.case_list ul').offset().left<-($('.case_list ul').width()-$(window).width())){
							//$('.case_list ul').css({'left':-($('.case_list ul').width()-$(window).width())});
							$('.case_list ul').css('transform','translateX('+(-($('.case_list ul').width()-$(window).width()))+'px)');
						}
				ti = 0;

				setTimeout(function(){
					(function caseD(){
						var f = -$('.case_move').width()/$(window).width();
						$('.case_move').css('left',$('.case_list ul').offset().left*f);
					}());
				},500);
			
			}
			
		});
		
		
		
	})();
	
	(function caseMove(){
		var sx,ex,lock = false,tm,tm2;
		$('.case_move').bind('mousedown',function(e){
			lock = true;
			var dx = $('.case_move').offset().left||0;
			sx = e.clientX-dx;
			$('.case_move').addClass('drag');
			$('.case_list ul').addClass('scroll');
			document.body.onselectstart = function(){ return false; }
		});
		$(document).bind('mousemove',function(e){
			if(lock){
				clearTimeout(tm);
				if(e.clientX - sx<=0){
					ex = 0;
				}else if(e.clientX - sx >= $(window).width() - $('.case_move').width()){
					ex = $(window).width() - $('.case_move').width();
				}else{
					ex = e.clientX - sx;
				}
				$('.case_move').css('left',ex);
				tm = setTimeout(function(){
					var v = $('.case_move').offset().left*$('.case_list ul').width()/$(window).width();
					$('.case_list ul').css('transform','translateX('+(-v)+'px)');
				},100);
			}
		}).bind('mouseup',function(){
			if(lock){
				lock = false;
				$('.case_move').removeClass('drag');
				document.body.onselectstart = function(){ return true; }
			}
		});
		
		$('.case_content').bind('mousewheel',function(e,detal){
			if($('.case_content').hasClass('inview')){
				/*
				var run = 60;
				e.preventDefault();
				if(detal<0){
					if($('.case_move').offset().left+run>=$(window).width() - $('.case_move').width()){
						$('.case_move').css('left',$(window).width() - $('.case_move').width());
					}else{
						$('.case_move').css('left',$('.case_move').offset().left+=run);
					}
					clearTimeout(tm2);
				}else{
					if($('.case_move').offset().left-run<=0){
						$('.case_move').css('left',0);
					}else{
						$('.case_move').css('left',$('.case_move').offset().left-=run);
					}
					clearTimeout(tm2);
				}
				
				tm2 = setTimeout(function(){
					var v = $('.case_move').offset().left*$('.case_list ul').width()/$(window).width();
					$('.case_list ul').css('transform','translateX('+(-v)+'px)');
				},50);
				*/
			}
		});
		
	})();
	
	
	(function partner(){
		var l = $('.partner_list ul li').length,i = 0,itv;
		$('.partner_list ul').width(l*140);
		$('.partner_next').bind((isTap)?'touchstart':'mouseenter',function(){
			itv = setInterval(function(){
				if(i>-($('.partner_list ul').width() - 840)){
					i--;
				}else{
					clearInterval(itv);
				}
				$('.partner_list ul').css('left',i);
			},5);
		}).bind((isTap)?'touchend':'mouseleave',function(){
			clearInterval(itv);
		});
		$('.partner_prev').bind((isTap)?'touchstart':'mouseenter',function(){
			itv = setInterval(function(){
				if(i<0){
					i++;
				}else{
					clearInterval(itv);
				}
				$('.partner_list ul').css('left',i);
			},5);
		}).bind((isTap)?'touchend':'mouseleave',function(){
			clearInterval(itv);
		});
		
	})();
	
	(function contact(){
		$('.floater_pointer').bind((isTap)?'touchstart':'click',function(){
			$('.contact_wrap').addClass('show');
		});
		$('.contact_close').bind((isTap)?'touchstart':'click',function(){
			$('.contact_wrap').removeClass('show');
		});
	})();

	
	(function tagsCloud(){
	
		var radius = 200;
		var dtr = Math.PI / 180;
		var d = 300;
		var mcList = [];
		var active = false;
		var lasta = 1;
		var lastb = 1;
		var distr = true;
		var tspeed = 1;
		var size = 500;
		var mouseX = 0;
		var mouseY = 0;
		var howElliptical = 1;
		var aA = null;
		var oDiv = null;
		window.onload = function()
		 {
			var i = 0;
			var oTag = null;
			oDiv = document.getElementById('tags');
			aA = oDiv.getElementsByTagName('li');
			for (i = 0; i < aA.length; i++)
			 {
				oTag = {};
				oTag.offsetWidth = aA[i].offsetWidth;
				oTag.offsetHeight = aA[i].offsetHeight;
				mcList.push(oTag);
			}
			sineCosine(0, 0, 0);
			positionAll();
			if(isTap){
				oDiv.addEventListener('touchtart',function(){
					active = true;
				},false);
				oDiv.addEventListener('touchend',function(){
					active = false;
				},false);
				oDiv.addEventListener('touchmove',function(e){
					mouseX = e.originalEvent.changedTouches[0].clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
					mouseY = e.originalEvent.changedTouches[0].clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);
					mouseX /= 5;
					mouseY /= 5;
				},false);

			}else{
				oDiv.onmouseover = function()
				 {
					active = true;
				};
				oDiv.onmouseout = function()
				 {
					active = false;
				};
				oDiv.onmousemove = function(ev)
				 {
					var oEvent = window.event || ev;
					mouseX = oEvent.clientX - (oDiv.offsetLeft + oDiv.offsetWidth / 2);
					mouseY = oEvent.clientY - (oDiv.offsetTop + oDiv.offsetHeight / 2);
					mouseX /= 5;
					mouseY /= 5;
				};
			}

			setInterval(update, 30);
			
		};
		function update()
		 {
			var a;
			var b;
			if (active)
			 {
				a = ( - Math.min(Math.max( - mouseY, -size), size) / radius) * tspeed;
				b = (Math.min(Math.max( - mouseX, -size), size) / radius) * tspeed;
			}
			 else
			 {
				a = lasta * 0.98;
				b = lastb * 0.98;
			}
			lasta = a;
			lastb = b;
			if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01)
			 {
				return;
			}
			var c = 0;
			sineCosine(a, b, c);
			for (var j = 0; j < mcList.length; j++)
			 {
				var rx1 = mcList[j].cx;
				var ry1 = mcList[j].cy * ca + mcList[j].cz * ( - sa);
				var rz1 = mcList[j].cy * sa + mcList[j].cz * ca;
				var rx2 = rx1 * cb + rz1 * sb;
				var ry2 = ry1;
				var rz2 = rx1 * ( - sb) + rz1 * cb;
				var rx3 = rx2 * cc + ry2 * ( - sc);
				var ry3 = rx2 * sc + ry2 * cc;
				var rz3 = rz2;
				mcList[j].cx = rx3;
				mcList[j].cy = ry3;
				mcList[j].cz = rz3;
				per = d / (d + rz3);
				mcList[j].x = (howElliptical * rx3 * per) - (howElliptical * 2);
				mcList[j].y = ry3 * per;
				mcList[j].scale = per;
				mcList[j].alpha = per;
				mcList[j].alpha = (mcList[j].alpha - 0.6) * (10 / 6);
			}
			doPosition();
			depthSort();
		}
		function depthSort()
		 {
			var i = 0;
			var aTmp = [];
			for (i = 0; i < aA.length; i++)
			 {
				aTmp.push(aA[i]);
			}
			aTmp.sort
			(function(vItem1, vItem2)
			 {
				if (vItem1.cz > vItem2.cz)
				 {
					return - 1;
				}
				 else if (vItem1.cz < vItem2.cz)
				 {
					return 1;
				}
				 else
				 {
					return 0;
				}
			});
			for (i = 0; i < aTmp.length; i++)
			 {
				aTmp[i].style.zIndex = i;
			}
		}
		function positionAll()
		 {
			var phi = 0;
			var theta = 0;
			var max = mcList.length;
			var i = 0;
			var aTmp = [];
			var oFragment = document.createDocumentFragment();
			for (i = 0; i < aA.length; i++)
			 {
				aTmp.push(aA[i]);
			}
			aTmp.sort
			(function()
			 {
				return Math.random() < 0.5 ? 1: -1;
			});
			for (i = 0; i < aTmp.length; i++)
			 {
				oFragment.appendChild(aTmp[i]);
			}
			oDiv.appendChild(oFragment);
			for (var i = 1; i < max + 1; i++) {
				if (distr)
				 {
					phi = Math.acos( - 1 + (2 * i - 1) / max);
					theta = Math.sqrt(max * Math.PI) * phi;
				}
				 else
				 {
					phi = Math.random() * (Math.PI);
					theta = Math.random() * (2 * Math.PI);
				}
				mcList[i - 1].cx = radius * Math.cos(theta) * Math.sin(phi);
				mcList[i - 1].cy = radius * Math.sin(theta) * Math.sin(phi);
				mcList[i - 1].cz = radius * Math.cos(phi);
				aA[i - 1].style.left = mcList[i - 1].cx + oDiv.offsetWidth / 2 - mcList[i - 1].offsetWidth / 2 + 'px';
				aA[i - 1].style.top = mcList[i - 1].cy + oDiv.offsetHeight / 2 - mcList[i - 1].offsetHeight / 2 + 'px';
			}
		}
		function doPosition()
		 {
			var l = oDiv.offsetWidth / 2;
			var t = oDiv.offsetHeight / 2;
			for (var i = 0; i < mcList.length; i++)
			 {
				aA[i].style.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
				aA[i].style.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
				aA[i].style.fontSize = Math.ceil(12 * mcList[i].scale / 2) + 8 + 'px';
				aA[i].style.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
				aA[i].style.opacity = mcList[i].alpha;
			}
		}
		function sineCosine(a, b, c)
		 {
			sa = Math.sin(a * dtr);
			ca = Math.cos(a * dtr);
			sb = Math.sin(b * dtr);
			cb = Math.cos(b * dtr);
			sc = Math.sin(c * dtr);
			cc = Math.cos(c * dtr);
		}
			
	
	})();
	
	$('#navigation li a').click(function(e){
		var v = $(this).attr('href').replace('#!/','');
		$('html,body').stop().animate({scrollTop:$('#'+v).offset().top},600);
	});
	
	$('.case_list_info_more').click(function(e){
		e.preventDefault();
		var v = $(this).attr('href');
		history.pushState({}, "", v);
		$('#case_frame').addClass('show');
		$.get(v,function(data){
			var va = $(data).find('.case_show').html();
			$('.case_show').html(va);
			setTimeout(function(){
				if($('.case_show').height()>=config.h){
					$('.case_show').css({'overflowX':'hidden','overflowY':'auto','height':config.h});
				}
			},600);

		});
	});
	
	$('.case_show_bg').click(function(){
		$('#case_frame').removeClass('show');
		setTimeout(function(){
			$('.case_show').attr('style','');
		},400);
	});
	
	
	
	//end
})