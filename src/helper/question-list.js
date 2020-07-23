var questionList = {
  type: 'flex',
  altText: 'Flex Message',
  contents: {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'text',
          text: '想問什麼問題呢?',
          size: 'sm',
          weight: 'bold',
          color: '#AAAAAA',
        },
      ],
    },
    body: {
      type: 'box',
      layout: 'horizontal',
      spacing: 'md',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          flex: 2,
          contents: [
            {
              type: 'button',
              action: {
                type: 'message',
                label: '問題一',
                text: '問題一',
              },
              margin: 'sm',
              height: 'sm',
            },
            {
              type: 'separator',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '問題二',
                text: '問題二',
              },
              margin: 'sm',
              height: 'sm',
            },
            {
              type: 'separator',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '問題三',
                text: '問題三',
              },
              margin: 'sm',
              height: 'sm',
            },
            {
              type: 'separator',
            },
            {
              type: 'button',
              action: {
                type: 'message',
                label: '問題四',
                text: '問題四',
              },
              margin: 'sm',
              height: 'sm',
            },
          ],
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'horizontal',
      contents: [
        {
          type: 'button',
          action: {
            type: 'uri',
            label: 'More',
            uri:
              'https://www.facebook.com/Ai%E6%9C%9F%E8%B2%A8%E9%A0%90%E6%B8%AC-104912961057733',
          },
        },
      ],
    },
  },
};

var quickReply = {
  type: 'text',
  text: '你愛我嗎?',
  quickReply: {
    items: [
      {
        type: 'action',
        imageUrl: '',
        action: {
          type: 'message',
          label: '愛',
          text: 'Yes',
        },
      },
      {
        type: 'action',
        imageUrl: '',
        action: {
          type: 'message',
          label: '不愛',
          text: 'No',
        },
      },
    ],
  },
};

module.exports = questionList;
module.exports = quickReply;
