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
              type: 'text',
              text: '問題一',
              flex: 1,
              size: 'sm',
              gravity: 'top',
            },
            {
              type: 'separator',
            },
            {
              type: 'text',
              text: '問題二',
              flex: 2,
              size: 'sm',
              gravity: 'center',
            },
            {
              type: 'separator',
            },
            {
              type: 'text',
              text: '問題三',
              flex: 2,
              size: 'sm',
              gravity: 'center',
            },
            {
              type: 'separator',
            },
            {
              type: 'text',
              text: '問題四',
              flex: 1,
              size: 'sm',
              gravity: 'bottom',
            },
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
            uri: 'https://linecorp.com',
          },
        },
      ],
    },
  },
};

module.exports = questionList;
