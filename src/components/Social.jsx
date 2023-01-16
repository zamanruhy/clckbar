import YoutubeIcon from '../icons/youtube.svg?component'
import TelegramIcon from '../icons/telegram.svg?component'
import VkIcon from '../icons/vk.svg?component'
import Button from './Button'

import './Social.css'

export default function Social() {
  return (
    <div class="social">
      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
        aria-label="Youtube"
      >
        <YoutubeIcon className="social__icon" aria-hidden="true" />
      </Button>

      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
        aria-label="Telegram"
      >
        <TelegramIcon className="social__icon" aria-hidden="true" />
      </Button>
      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
        aria-label="VK"
      >
        <VkIcon className="social__icon" aria-hidden="true" />
      </Button>
    </div>
  )
}
