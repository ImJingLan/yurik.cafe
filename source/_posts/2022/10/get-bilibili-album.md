---
title: 获取B站视频封面
index_img: /2022/get-bilibili-album/banner.png
tags:
categories: 技术

date: 2022-10-23
---

## 前言

最近重装了电脑，然后电脑上整理的 iTunes 资料库全没了。~~草~~

在整理的时候发现有一些歌曲是直接从 B 站上下载下来的，专辑封面也是从 B 站封面扒的，全没了（呜呜呜

虽然在 Bing 上一搜就有很多封面提取的网站

![网站1](1.webp)

![网站2](2.webp)

![网站3](3.webp)

但是秉承着**用轮子不如造轮子**的理论(~~其实就是闲着没事~~)，我决定自己用 Python 写一个提取封面的工具

## 准备工作

既然是造轮子，那当然要先看 B 站的 API

搜了一下，发现网上公认的哔哩哔哩官方 API 文档地址是：**[http://docs.bilibili.cn/wiki](http://docs.bilibili.cn/wiki)**

但是

![网站无法访问](4.webp)

![2017717113835269.jpg](https://i.loli.net/2021/07/27/HPiBuzEebg5Zclf.jpg)

> 在 Github 上面找到的野生文档 [SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)

API

获取视频信息

`https://api.bilibili.com/x/web-interface/view?bvid=BV号`

丢**[json.cn](http://json.cn)**解析一下

```JSON
{
    "code":0,
    "message":"0",
    "ttl":1,
    "data":{
        "bvid":"BV1d54y1n7NX",
        "aid":846717078,
        "videos":1,
        "tid":28,
        "tname":"原创音乐",
        "copyright":1,
        "pic":"http://i0.hdslb.com/bfs/archive/38ee715cfe85351c790102691d01d05007092c9e.jpg",
        "title":"【咩栗x呜米】噬光者与发光体的爱情【原创曲】",
        "pubdate":1626429602,
        "ctime":1626332074,
        "desc":"“为何越是接近 越遥不可及”\n“分明你是我的恒星”\n \n演唱：呜米x咩栗\n策划：叁咉/作曲：烂兔子/作词：雨狸/曲绘：团一 六点/修音：橘太太（边银工作室）/Vocal Producer：无机草莓/视频：拉浮浮/企划：星海 DBRT/音乐统筹：依溪禾/封面：二七/统筹：星米/助力：秋山枫\n\nVOCALOID版本：BV1ah41167kJ\n\n二创包链接：https://pan.baidu.com/s/1HNs6x8jRlebZumMFihebig \r提取码：wmml\n欢迎二创！",
        "desc_v2":[
            {
                "raw_text":"“为何越是接近 越遥不可及”\n“分明你是我的恒星”\n \n演唱：呜米x咩栗\n策划：叁咉/作曲：烂兔子/作词：雨狸/曲绘：团一 六点/修音：橘太太（边银工作室）/Vocal Producer：无机草莓/视频：拉浮浮/企划：星海 DBRT/音乐统筹：依溪禾/封面：二七/统筹：星米/助力：秋山枫\n\nVOCALOID版本：BV1ah41167kJ\n\n二创包链接：https://pan.baidu.com/s/1HNs6x8jRlebZumMFihebig \r提取码：wmml\n欢迎二创！",
                "type":1,
                "biz_id":0
            }
        ],
        "state":0,
        "duration":237,
        "rights":{
            "bp":0,
            "elec":0,
            "download":1,
            "movie":0,
            "pay":0,
            "hd5":1,
            "no_reprint":1,
            "autoplay":1,
            "ugc_pay":0,
            "is_cooperation":1,
            "ugc_pay_preview":0,
            "no_background":0,
            "clean_mode":0,
            "is_stein_gate":0
        },
        "owner":{
            "mid":745493,
            "name":"咩栗",
            "face":"http://i2.hdslb.com/bfs/face/9ea6ed607cb0b4adb19ace945586d2cf50797589.jpg"
        },
        "stat":{
            "aid":846717078,
            "view":222770,
            "danmaku":3048,
            "reply":3396,
            "favorite":17076,
            "coin":26468,
            "share":2426,
            "now_rank":0,
            "his_rank":0,
            "like":31918,
            "dislike":0,
            "evaluation":"",
            "argue_msg":""
        },
        "dynamic":"如果命运可逆\n如果我与你的灵魂 真的相契",
        "cid":370261661,
        "dimension":{
            "width":1920,
            "height":1080,
            "rotate":0
        },
        "no_cache":false,
        "pages":[
            {
                "cid":370261661,
                "page":1,
                "from":"vupload",
                "part":"噬光",
                "duration":237,
                "vid":"",
                "weblink":"",
                "dimension":{
                    "width":1920,
                    "height":1080,
                    "rotate":0
                }
            }
        ],
        "subtitle":{
            "allow_submit":true,
            "list":[

            ]
        },
        "staff":[
            {
                "mid":745493,
                "title":"UP主",
                "name":"咩栗",
                "face":"http://i2.hdslb.com/bfs/face/9ea6ed607cb0b4adb19ace945586d2cf50797589.jpg",
                "vip":{
                    "type":2,
                    "status":1,
                    "due_date":1631980800000,
                    "vip_pay_type":0,
                    "theme_type":0,
                    "label":{
                        "path":"",
                        "text":"年度大会员",
                        "label_theme":"annual_vip",
                        "text_color":"#FFFFFF",
                        "bg_style":1,
                        "bg_color":"#FB7299",
                        "border_color":""
                    },
                    "avatar_subscript":1,
                    "nickname_color":"#FB7299",
                    "role":3,
                    "avatar_subscript_url":"http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official":{
                    "role":1,
                    "title":"bilibili 知名UP主",
                    "desc":"",
                    "type":0
                },
                "follower":614214,
                "label_style":0
            },
            {
                "mid":617459493,
                "title":"演唱",
                "name":"呜米",
                "face":"http://i0.hdslb.com/bfs/face/e8ae6625537cb14f06d883072c5891eae7e21910.jpg",
                "vip":{
                    "type":2,
                    "status":1,
                    "due_date":1676995200000,
                    "vip_pay_type":0,
                    "theme_type":0,
                    "label":{
                        "path":"",
                        "text":"年度大会员",
                        "label_theme":"annual_vip",
                        "text_color":"#FFFFFF",
                        "bg_style":1,
                        "bg_color":"#FB7299",
                        "border_color":""
                    },
                    "avatar_subscript":1,
                    "nickname_color":"#FB7299",
                    "role":3,
                    "avatar_subscript_url":"http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official":{
                    "role":1,
                    "title":"bilibili 知名UP主",
                    "desc":"",
                    "type":0
                },
                "follower":437494,
                "label_style":0
            },
            {
                "mid":605473,
                "title":"作词",
                "name":"雨狸",
                "face":"http://i1.hdslb.com/bfs/face/eb78c0aee4431b125d60c38b176d1a25197f1834.jpg",
                "vip":{
                    "type":2,
                    "status":1,
                    "due_date":1651766400000,
                    "vip_pay_type":1,
                    "theme_type":0,
                    "label":{
                        "path":"",
                        "text":"年度大会员",
                        "label_theme":"annual_vip",
                        "text_color":"#FFFFFF",
                        "bg_style":1,
                        "bg_color":"#FB7299",
                        "border_color":""
                    },
                    "avatar_subscript":1,
                    "nickname_color":"#FB7299",
                    "role":3,
                    "avatar_subscript_url":"http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official":{
                    "role":1,
                    "title":"bilibili 知名音乐UP主",
                    "desc":"",
                    "type":0
                },
                "follower":166644,
                "label_style":0
            },
            {
                "mid":15334904,
                "title":"策划",
                "name":"叁咉O3",
                "face":"http://i2.hdslb.com/bfs/face/a2937c10f1b73f3e044f71e8561b8d065e5cd55a.jpg",
                "vip":{
                    "type":2,
                    "status":1,
                    "due_date":1627833600000,
                    "vip_pay_type":1,
                    "theme_type":0,
                    "label":{
                        "path":"",
                        "text":"年度大会员",
                        "label_theme":"annual_vip",
                        "text_color":"#FFFFFF",
                        "bg_style":1,
                        "bg_color":"#FB7299",
                        "border_color":""
                    },
                    "avatar_subscript":1,
                    "nickname_color":"#FB7299",
                    "role":3,
                    "avatar_subscript_url":"http://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png"
                },
                "official":{
                    "role":7,
                    "title":"音乐人叁咉",
                    "desc":"",
                    "type":0
                },
                "follower":3874,
                "label_style":0
            },
            {
                "mid":78859,
                "title":"作曲",
                "name":"烂兔子P",
                "face":"http://i1.hdslb.com/bfs/face/51fa43d2c79bce141242b73745072f04339fb1af.jpg",
                "vip":{
                    "type":1,
                    "status":0,
                    "due_date":1602259200000,
                    "vip_pay_type":0,
                    "theme_type":0,
                    "label":{
                        "path":"",
                        "text":"",
                        "label_theme":"",
                        "text_color":"",
                        "bg_style":0,
                        "bg_color":"",
                        "border_color":""
                    },
                    "avatar_subscript":0,
                    "nickname_color":"",
                    "role":0,
                    "avatar_subscript_url":""
                },
                "official":{
                    "role":7,
                    "title":"音乐领域优质UP主",
                    "desc":"",
                    "type":0
                },
                "follower":16255,
                "label_style":0
            }
        ],
        "user_garb":{
            "url_image_ani_cut":"http://i0.hdslb.com/bfs/garb/item/f118b57e21d94302baff903afa9a83ede90f6e07.bin"
        }
    }
}
```

有用的就是 pic 字段了![PIC](pic.webp)

那么，开搞

## Python 实现

随便写了个代码

```python
import json
import requests
import os
import sys

# 主程序
if __name__ == "__main__":
    bvid = input('视频BV号:')#获取视频BV号
    info = requests.get('https://api.bilibili.com/x/web-interface/view?bvid='+bvid).text
    info = json.loads(info)
    cover = info['data'].get('pic')
    print(cover)
```

![封面输出](output.webp)

**输出成功**

> PS:《噬光者与发光体的爱情》真的好听！！！！Meumy 我吹爆！！！！

### 接下来写输出

#### 先写了封面文件夹检测

```python
def mkcoverdif():
    if not os.path.isdir('cover'):
        os.mkdir('cover')
```

#### 用 requests 写了图片保存的函数

```python
def imgdownload(url,name):
    cover = requests.get(url)
    with open('./cover/'+name+'.jpg', 'wb') as pic:
        pic.write(cover.content)
```

#### 获取一些必要信息

```python
    cover = info['data'].get('pic') # 封面地址
    title = info['data'].get('title') # 视频标题
    bvid = info['data'].get('bvid') # 返回的正确格式BV号
```

> 这是直接写入主程序块的

#### 完整代码

```python
import json
import requests
import os
import sys
import codecs
import re

def mkcoverdir():
    if not os.path.isdir('cover'):
        os.mkdir('cover')

def imgdownload(url,name):
    cover = requests.get(url)
    with open('./cover/'+name+'.jpg', 'wb') as pic:
        pic.write(cover.content)

def av2bv(av):
    info = requests.get('https://api.bilibili.com/x/web-interface/view?aid='+av).text
    info = json.loads(info)
    if info.get('code') == 0:
        vid = info['data'].get('bvid') # 返回的正确格式BV号
        return vid
    else:
        print("找不到该AV号")
        print("CODE:"+str(info.get('code'))+" MESSAGE:"+info.get('message'))
        return 1
def bvcheck(vid):
    if vid.startswith('BV',0,2) or vid.startswith('bV',0,2) or vid.startswith('Bv',0,2) or vid.startswith('bv',0,2):
        if len(vid) == 12:
            info = info = requests.get('https://api.bilibili.com/x/web-interface/view?bvid='+vid).text
            info = json.loads(info)
            if info.get('code') == 0:
                return True
            else:
                print("找不到该BV号")
                print("CODE:"+str(info.get('code'))+" MESSAGE:"+info.get('message'))
                return False


        else:
            print('这不是一个合法的BV号, BV号应为12位字符串')
            return False
    else:
        print('这不是一个合法的BV号，BV号应为 BV 开头')
        return False

def main():
    valid = True
    mkcoverdir()
    print("请选择 AV号 / BV号")
    print("1.AV号     2.BV号")
    status = input()

    if status == '1':
        vid = input('AV号:')
        vid = re.sub('av', '', vid, flags=re.IGNORECASE)
        if vid.isdigit():
            vid = av2bv(vid)
            if vid == 1:
                valid = False
        else:
            print('这不是一个合法的AV号')
            valid = False

    if status == '2':
        vid = input('视频BV号:')#获取视频BV号

    if status == '1' or status == '2':
        if valid:
            if bvcheck(vid):
                info = requests.get('https://api.bilibili.com/x/web-interface/view?bvid='+vid).text
                info = json.loads(info)
                bvid = info['data'].get('bvid') # 返回的正确格式BV号
                cover = info['data'].get('pic') # 封面地址d
                title = info['data'].get('title') # 视频标题
                if status == '1':
                    vid = "av"+str(info['data'].get('aid')) #返回的正确格式AV号
                if status == '2':
                    vid = info['data'].get('bvid') # 返回的正确格式BV号
            #   print(title+' - '+bvid+": "+cover)
                print('完成!') # 提示一下
                print("保存文件名:"+title+' - '+vid+".jpg")
                imgdownload(cover,title+' - '+vid) # 下载
    else:
        print("这不是一个合法的状态码")


# 主程序
if __name__ == "__main__":
    main()
    os.system('pause')
```

> 自己加了 AV 号与 BV 号的判断，如果是 AV 号就把 AV 转换成 BV 再用 BV 手法去找封面
>
> 然后根据选择的类型进行保存

#### 运行一下

![成功](6.webp)

**Done！**

## 后记

这玩意没啥好说的。。。

唯一的缺点就是没有写 AV 号的获取和 BV 号格式检测吧。。
