import YoutubeIcon from '../icons/youtube.svg?component'
import TelegramIcon from '../icons/telegram.svg?component'
import VkIcon from '../icons/vk.svg?component'

import './Social.css'
import Button from './Button'

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
        <YoutubeIcon className="social__icon h-[0.4em]" aria-hidden="true" />
      </Button>

      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
        aria-label="Telegram"
      >
        <TelegramIcon
          className="social__icon right-[0.04em] h-[0.44em]"
          aria-hidden="true"
        />
      </Button>
      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
        aria-label="VK"
      >
        <VkIcon
          className="social__icon right-[0.02em] top-[0.01em] h-[0.38em]"
          aria-hidden="true"
        />
      </Button>
    </div>
  )
}
