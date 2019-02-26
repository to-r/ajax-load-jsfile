var animationData = {
  project_url: 'http:///projects/325/revisions/315/edit/movie',
  task_set: [
    {
      task_name: 'download_task',
      inputs: [
        {
          uri:
            'http://localhost:53000/files/revision_scenes/file/resized_2124_1d2eee519bf8d6a42f9960f7736d617db5abee5f.jpg',
          label: 'image2124',
          path: '01.jpg'
        },
        {
          uri:
            'http://localhost:53000/files/revision_scenes/file/resized_2123_1d2eee519bf8d6a42f9960f7736d617db5abee5f.jpg',
          label: 'image2123',
          path: '02.jpg'
        },
        {
          uri:
            'http://localhost:53000/files/revision_scenes/file/resized_2125_1d2eee519bf8d6a42f9960f7736d617db5abee5f.jpg',
          label: 'image2125',
          path: '03.jpg'
        },
        {
          uri:
            'http://localhost:53000/files/revision_scenes/file/resized_2126_0343b03326b55b79b19b1d3815b605059e818002.png',
          label: 'image2126',
          path: '04.jpg'
        }
      ]
    },
    {
      task_name: 'natron_task',
      //"format": "pattern165",
      format: 'pattern165',
      json: {
        input: {
          // ロゴ画像の情報
          logo: {
            image: null
          },
          // 各シーンの情報
          cuts: [
            {
              id: 1,
              sequence: 1,
              color: {
                base_color_1: {
                  r: 0,
                  g: 0,
                  b: 0
                },
                base_color_2: {
                  r: 1,
                  g: 0.19,
                  b: 0.19
                },
                base_color_3: {
                  r: 0.98,
                  g: 0.96,
                  b: 0.08
                }
              },
              options: {
                switch_left_right: true,
                transition: {
                  from: {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                  },
                  to: {
                    x: 0,
                    y: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    rotation: 0
                  }
                },
                text: {
                  textAlign: 'center',
                  fontSize: 60
                },
                mask: null
              },
              text: "<span foreground='#ffffff'>テスト動画</span>",
              text_scale: [1],
              image: 'image2124',
              frame: 150,
              fade: 10
            },
            {
              id: 2,
              sequence: 2,
              color: {
                base_color_1: {
                  r: 0,
                  g: 0,
                  b: 0
                },
                base_color_2: {
                  r: 1,
                  g: 0.19,
                  b: 0.19
                },
                base_color_3: {
                  r: 0.98,
                  g: 0.96,
                  b: 0.08
                }
              },
              options: {
                transform_still: true,
                transition: {
                  from: {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                  },
                  to: {
                    x: 0,
                    y: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    rotation: 0
                  }
                },
                text: {
                  textAlign: 'center',
                  fontSize: 60
                },
                mask: null
              },
              text:
                "<span foreground='#ffffff'>「TSUTAYA BOOK APARTMENT」が入る</span><br-m><span foreground='#ffffff'>ビルのB1 Fにある日本酒バー「know by moto」。</span>",
              text_scale: [0.8],
              image: 'image2123',
              frame: 150,
              fade: 10
            },
            {
              id: 2,
              sequence: 3,
              color: {
                base_color_1: {
                  r: 0,
                  g: 0,
                  b: 0
                },
                base_color_2: {
                  r: 1,
                  g: 0.19,
                  b: 0.19
                },
                base_color_3: {
                  r: 0.98,
                  g: 0.96,
                  b: 0.08
                }
              },
              options: {
                transform_still: true,
                transition: {
                  from: {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                  },
                  to: {
                    x: 0,
                    y: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    rotation: 0
                  }
                },
                text: {
                  textAlign: 'center',
                  fontSize: 60
                },
                mask: null
              },
              text:
                "<span foreground='#ffffff'>店名の「moto」は、</span><br-m><span foreground='#ffffff'>日本酒をつくるときの「酛」のこと。</span>",
              text_scale: [0.8],
              image: 'image2125',
              frame: 150,
              fade: 10
            },
            {
              id: 2,
              sequence: 4,
              color: {
                base_color_1: {
                  r: 0,
                  g: 0,
                  b: 0
                },
                base_color_2: {
                  r: 1,
                  g: 0.19,
                  b: 0.19
                },
                base_color_3: {
                  r: 0.98,
                  g: 0.96,
                  b: 0.08
                }
              },
              options: {
                switch_scale_down: true,
                transition: {
                  from: {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                  },
                  to: {
                    x: 0,
                    y: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    rotation: 0
                  }
                },
                text: {
                  textAlign: 'center',
                  fontSize: 60
                },
                mask: null
              },
              text:
                "<span foreground='#ffffff'>日本酒を楽しむ人の入り口になるように、</span><br-m><span foreground='#ffffff'>日本酒づくりのもとでもある「酛」から名前をつけたのだそう。</span>",
              text_scale: [0.8],
              image: 'image2126',
              frame: 150,
              fade: 10
            },
            {
              id: 2,
              sequence: 5,
              color: {
                base_color_1: {
                  r: 0,
                  g: 0,
                  b: 0
                },
                base_color_2: {
                  r: 1,
                  g: 0.19,
                  b: 0.19
                },
                base_color_3: {
                  r: 0.98,
                  g: 0.96,
                  b: 0.08
                }
              },
              options: {
                switch_scale_down: true,
                transition: {
                  from: {
                    x: 0,
                    y: 0,
                    scaleX: 1,
                    scaleY: 1,
                    rotation: 0
                  },
                  to: {
                    x: 0,
                    y: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    rotation: 0
                  }
                },
                text: {
                  textAlign: 'center',
                  fontSize: 60
                },
                mask: null
              },
              text:
                "<span foreground='#ffffff'>B1 Fまでに向かう階段には浮世絵が飾られており、</span><br-m><span foreground='#ffffff'>「know」の文字が隠された絵があります。</span>",
              text_scale: [0.8],
              image: null,
              frame: 150,
              fade: 10
            }
          ]
        },
        output: {
          preview: 'true'
        }
      }
    },
    {
      task_name: 'ffmpeg_task',
      option_name: 'pv_option',
      options: {
        images: {
          fps: 15
        },
        audios: [
          {
            label: '',
            type: 'scene_audio',
            sequence: 1,
            fade: {
              start: '0.0',
              end: '5.0',
              fade_in: 0,
              fade_out: 0
            }
          },
          {
            label: '',
            type: 'scene_audio',
            sequence: 2,
            fade: {
              start: '5.0',
              end: '47.0',
              fade_in: 0,
              fade_out: 0
            }
          },
          {
            label: '',
            type: 'scene_audio',
            sequence: 3,
            fade: {
              start: '47.0',
              end: '52.0',
              fade_in: 0,
              fade_out: 0
            }
          },
          {
            label: '',
            type: 'scene_audio',
            sequence: 4,
            fade: {
              start: '52.0',
              end: '58.0',
              fade_in: 0,
              fade_out: 0
            }
          },
          {
            label: '',
            type: 'scene_audio',
            sequence: 5,
            fade: {
              start: '58.0',
              end: '63.0',
              fade_in: 0,
              fade_out: 0
            }
          }
        ],
        format: {
          crf: 22,
          width: 1920,
          height: 1080
        },
        outputs: {
          label: 'output',
          path: 'output.mp4'
        },
        preview: 'true'
      }
    },
    {
      task_name: 'upload_azure_blob_task',
      outputs: [
        {
          label: 'output',
          container: 'videobrain',
          blob: 'build_histories/preview/160.mp4'
        },
        {
          path: '/opt/shared/revisions/revision160/sources/thumbnail.bmp',
          container: 'videobrain',
          blob: 'build_histories/preview/160.bmp'
        }
      ]
    }
  ],
  finally: [
    {
      task_name: 'status_api_task',
      url: 'http://localhost:53000/v1.0/build_status',
      method: 'put',
      content: {}
    }
  ]
};
