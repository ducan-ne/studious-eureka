import { sample } from 'lodash'

let icons = '😀 😃 😄 😁 😆 😅 😂 🤣 ☺ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁 ☹ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿 👹 👺 💩 👻 💀 ☠ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌ 🤘 👌 👈 👉 👆 👇 ☝ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍ 🤳 💅 💍 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱 👴 👵 👲 👳 👮 👷 💂 🕵 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇 💁 🙅 🙆 🙋 🙎 🙍 💇 💆 🕴 💃 🕺 👯 🚶 🏃 👫 👭 👬 💑 👩‍ ❤️‍ 👩 👨‍ ❤️‍ 👨 💏 👩‍ ❤️‍ 💋‍ 👩 👨‍ ❤️‍ 💋‍ 👨 👪 👨‍ 👩‍ 👧 👨‍ 👩‍ 👧‍ 👦 👨‍ 👩‍ 👦‍ 👦 👨‍ 👩‍ 👧‍ 👧 👩‍ 👩‍ 👦 👩‍ 👩‍ 👧 👩‍ 👩‍ 👧‍ 👦 👩‍ 👩‍ 👦‍ 👦 👩‍ 👩‍ 👧‍ 👧 👨‍ 👨‍ 👦 👨‍ 👨‍ 👧 👨‍ 👨‍ 👧‍ 👦 👨‍ 👨‍ 👦‍ 👦 👨‍ 👨‍ 👧‍ 👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓 🕶 🌂 ☂ ❤ 💛 💚 💙 💜 🖤 💔 ❣ 💕 💞 💓 💗 💖 💘 💝 💟 🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🕷 🕸 🐢 🐍 🦎 🦂 🦀 🦑 🐙 🦐 🐠 🐟 🐡 🐬 🦈 🐳 🐋 🐊 🐆 🐅 🐃 🐂 🐄 🦌 🐪 🐫 🐘 🦏 🦍 🐎 🐖 🐐 🐏 🐑 🐕 🐩 🐈 🐓 🦃 🕊 🐇 🐁 🐀 🐿 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌻 🌼 🌸 🌺 🌎 🌍 🌏 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌞 🌛 🌜 🌙 💫 ⭐ 🌟 ✨ ⚡ 🔥 💥 ☄ ☀ 🌤 ⛅ 🌥 🌦 🌈 ☁ 🌧 ⛈ 🌩 🌨 ☃ ⛄ ❄ 🌬 💨 🌪 🌫 🌊 💧 💦 ☔ 🍏 🍎 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥝 🥑 🍅 🍆 🥒 🥕 🌽 🌶 🥔 🍠 🌰 🥜 🍯 🥐 🍞 🥖 🧀 🥚 🍳 🥓 🥞 🍤 🍗 🍖 🍕 🌭 🍔 🍟 🥙 🌮 🌯 🥗 🥘 🍝 🍜 🍲 🍥 🍣 🍱 🍛 🍚 🍙 🍘 🍢 🍡 🍧 🍨 🍦 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🍪 🥛 🍼 ☕ 🍵 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🍽 ⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳ 🏹 🎣 🥊 🥋 ⛸ 🎿 ⛷ 🏂 🏋 🤺 ⛹ 🏌 🏄 🏊 🚣 🏇 🚴 🚵 🎽 🏅 🎖 🥇 🥈 🥉 🏆 🏵 🎗 🎫 🎟 🎪 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🎯 🎳 🎮 🎰 🚗 🚕 🚙 🚌 🚎 🏎 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🛴 🚲 🛵 🏍 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🚁 🛩 ✈ 🛫 🛬 🚀 🛰 💺 🛶 ⛵ 🛥 🚤 🛳 ⛴ 🚢 ⚓ 🚧 ⛽ 🚏 🚦 🚥 🗺 🗿 🗽 ⛲ 🗼 🏰 🏯 🏟 🎡 🎢 🎠 ⛱ 🏖 🏝 ⛰ 🏔 🗻 🌋 🏜 🏕 ⛺ 🛤 🛣 🏗 🏭 🏠 🏡 🏘 🏚 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 🏛 ⛪ 🕌 🕍 🕋 ⛩ 🗾 🎑 🏞 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🏙 🌃 🌌 🌉 🌁 ⌚ 📱 📲 💻 ⌨ 🖥 🖨 🖱 🖲 🕹 🗜 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📽 🎞 📞 ☎ 📟 📠 📺 📻 🎙 🎚 🎛 ⏱ ⏲ ⏰ 🕰 ⌛ ⏳ 📡 🔋 🔌 💡 🔦 🕯 🗑 🛢 💸 💵 💴 💶 💷 💰 💳 💎 ⚖ 🔧 🔨 ⚒ 🛠 ⛏ 🔩 ⚙ ⛓ 🔫 💣 🔪 🗡 ⚔ 🛡 🚬 ⚰ ⚱ 🏺 🔮 📿 💈 ⚗ 🔭 🔬 🕳 💊 💉 🌡 🚽 🚰 🚿 🛁 🛀 🛎 🔑 🗝 🚪 🛋 🛏 🛌 🖼 🛍 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 ✉ 📩 📨 📧 💌 📥 📤 📦 🏷 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 🗒 🗓 📆 📅 📇 🗃 🗳 🗄 📋 📁 📂 🗂 🗞 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 🖇 📐 📏 📌 📍 ✂ 🖊 🖋 ✒ 🖌 🖍 📝 ✏ 🔍 🔎 🔏 🔐 🔒 🔓 ☮ ✝ ☪ 🕉 ☸ ✡ 🔯 🕎 ☯ ☦ 🛐 ⛎ ♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ 🆔 ⚛ 🉑 ☢ ☣ 📴 📳 🈶 🈚 🈸 🈺 🈷 ✴ 🆚 💮 🉐 ㊙ ㊗ 🈴 🈵 🈹 🈲 🅰 🅱 🆎 🆑 🅾 🆘 ❌ ⭕ 🛑 ⛔ 📛 🚫 💯 💢 ♨ 🚷 🚯 🚳 🚱 🔞 📵 🚭 ❗ ❕ ❓ ❔ ‼ ⁉ 🔅 🔆 〽 ⚠ 🚸 🔱 ⚜ 🔰 ♻ ✅ 🈯 💹 ❇ ✳ ❎ 🌐 💠 Ⓜ 🌀 💤 🏧 🚾 ♿ 🅿 🈳 🈂 🛂 🛃 🛄 🛅 🚹 🚺 🚼 🚻 🚮 🎦 📶 🈁 🔣 ℹ 🔤 🔡 🔠 🆖 🆗 🆙 🆒 🆕 🆓 0⃣ 1⃣ 2⃣ 3⃣ 4⃣ 5⃣ 6⃣ 7⃣ 8⃣ 9⃣ 🔟 🔢 #⃣ *⃣ ▶ ⏸ ⏯ ⏹ ⏺ ⏭ ⏮ ⏩ ⏪ ⏫ ⏬ ◀ 🔼 🔽 ➡ ⬅ ⬆ ⬇ ↗ ↘ ↙ ↖ ↕ ↔ ↪ ↩ ⤴ ⤵ 🔀 🔁 🔂 🔄 🔃 🎵 🎶 ➕ ➖ ➗ ✖ 💲 💱 ™ © ® 〰 ➰ ➿ 🔚 🔙 🔛 🔝 🔜 ✔ ☑ 🔘 ⚪ ⚫ 🔴 🔵 🔺 🔻 🔸 🔹 🔶 🔷 🔳 🔲 ▪ ▫ ◾ ◽ ◼ ◻ ⬛ ⬜ 🔈 🔇 🔉 🔊 🔔 🔕 📣 📢 👁 ‍ 🗨 💬 💭 🗯 ♠ ♣ ♥ ♦ 🃏 🎴 🀄 🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧 🏳 🏴 🏁 🚩 🏳 ‍🌈'.split(
  ' '
)

export function messageRewrite(msg: string) {
  return msg
    .replace(/\((.*?)\)/g, (__, v) => {
      return sample(v.split('|'))
    })
    .replace(/\@icon/g, () => {
      return sample(icons) || ''
    })
}
