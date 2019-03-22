module.exports = {
  siteMetadata: {
    title: 'KAPCQ',
    description: 'The Korean American Presbyterian Church of Queens',
    menus: [
      {title: "환영합니다", menu: [
        { item: "담임목사 환영사", link: "/about", subItems: []},
        { item: "교회방문하기", 
          subItems: [
            {name:"찾아오시는 길", link: "/products"},
            {name:"교회시설", link: "/"}
          ]
        },
        { item: "새가족",
          subItems: [
            {name:"등록하기", link: "/"},
            {name:"새가족 FAQ", link: "/"},
          ]
        },
        { item: "사역참여하기", link: "/", subItems: []},
        { item: "퀸장 용어집", link: "/", subItems: []},
      ]},
      {title: "교회안내", menu: [
        { item: "교회소개", 
          subItems: [
            {name:"담임목사 인사말", link: "/"},
            {name:"퀸장비전", link: "/"},
            {name:"퀸장 발자취", link: "/"},
            {name:"퀸장 연혁", link: "/"},
          ]
        },
        { item: "예배시간", 
          subItems: [
            {name:"주일예배", link: "/"},
            {name:"다민족예배", link: "/"},
            {name:"교회학교", link: "/"},
            {name:"청년부", link: "/"},
          ]
        },
        { item: "교통/시설안내", 
          subItems: [
            {name:"교회 오시는 길", link: "/"},
            {name:"주차장 안내", link: "/"},
            {name:"교회버스 운행", link: "/"},
            {name:"시설 안내", link: "/"},
          ]
        },
        { item: "섬기는 이들", link: "/team", subItems: []},
      ]},
      {title: "말씀과 찬양", menu: [
        { item: "주일예배설교", link: "/", subItems: []},
        { item: "특별집회", link: "/", subItems: []},
        { item: "주일찬양방송", link: "/sunday-praise", subItems: []},
        { item: "특별찬양방송", link: "/", subItems: []},
        { item: "행사영상", link: "/", subItems: []},
      ]},
      {title: "교회기관", menu: [
        { item: "교구", 
          subItems: [
            {name:"교구장", link: "/"},
            {name:"지역장", link: "/"},
          ]
        },
        { item: "선교회", 
          subItems: [
            {name:"장년선교회", link: "/"},
            {name:"갓즈윌선교회", link: "/"},
            {name:"청년선교회", link: "/"},
          ]
        },
        { item: "사역위원회", link: "/", subItems: []},
        { item: "부속학교", link: "/", subItems: []},
        { item: "다민족예배부", link: "/", subItems: []},
        { item: "동부개혁장로회신학교", link: "/", subItems: []},
        { item: "크리스천신문사 /히즈핑거출판사", link: "/", subItems: []},
        { item: "요셉도서관", link: "/", subItems: []},
      ]},
      {title: "훈련과 양육", menu: [
        { item: "새가족학교", 
          subItems: [
            {name:"등록안내", link: "/"},
            {name:"교육내용", link: "/"},
            {name:"교회소개 영상", link: "/"},
          ]
        },
        { item: "훈련", 
          subItems: [
            {name:"퀸장바이블컬리지", link: "/"},
            {name:"제자훈련", link: "/"},
            {name:"전도폭발",  link: "/"},
            {name:"세례교육", link: "/"},
          ]
        },
        { item: "교회학교", 
          subItems: [
            {name:"주일학교", link: "/"},
            {name:"특별활동", link: "/"},
            {name:"교육부 소식", link: "/"},
            {name:"교회학교 매뉴얼", link: "/"},
          ]
        },
        { item: "청년부", 
          subItems: [
            {name:"청년대학부",  link: "/"},
            {name:"청년선교부", link: "/"},
          ]
        },
      ]},
      {title: "선교", menu: [
        { item: "선교비전", link: "/", subItems: []},
        { item: "파송과 지원", link: "/", subItems: []},
        { item: "단기선교", link: "/", subItems: []},
        { item: "선교훈련", link: "/", subItems: []},
      ]},
      {title: "공동체", menu: [
        { item: "목양컬럼", link: "/", subItems: []},
        { item: "교회소식(행사알림)", link: "/notice", subItems: []},
        { item: "가정예배", link: "/", subItems: []},
        { item: "성경문답서", link: "/", subItems: []},
        { item: "구역예배교안", link: "/", subItems: []},
        { item: "금주의 주보", link: "/", subItems: []},
        { item: "행사사진", link: "/", subItems: []},
        { item: "아가페", link: "/", subItems: []},
        { item: "*행정서식 내려받기", link: "/", subItems: []},
        { item: "퀸장달력(행사안내)", link: "/", subItems: []},
      ]},
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve:'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true,            // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
