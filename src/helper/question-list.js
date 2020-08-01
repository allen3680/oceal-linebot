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
                label: '如果先付費的話到時候沒獲利反而虧損的話算誰的呢?',
                text: '如果先付費的話到時候沒獲利反而虧損的話算誰的呢?',
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
                label: '需要電腦或手機使用嗎?',
                text: '需要電腦或手機使用嗎?',
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
                label: '勝率大概多少呢?',
                text: '勝率大概多少呢?',
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
                label: '請問你們是做什麼商品為主?',
                text: '請問你們是做什麼商品為主?',
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
                label: '本金要多少?',
                text: '本金要多少?',
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
                label: '可以獲利多少?',
                text: '可以獲利多少?',
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
                label: '我還是不太明白要如何做?',
                text: '我還是不太明白是做什麼要如何做?',
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
          text: 'Yes',
        },
      },
    ],
  },
};

module.exports = { questionList, quickReply };
