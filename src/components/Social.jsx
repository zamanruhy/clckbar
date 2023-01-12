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
      >
        <YoutubeIcon className="social__icon h-[0.4em]" />
      </Button>

      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
      >
        <TelegramIcon className="social__icon right-[0.04em] h-[0.44em]" />
      </Button>
      <Button
        class="social__link"
        as="a"
        href="#"
        target="_blank"
        variant="primary"
      >
        <VkIcon className="social__icon right-[0.02em] top-[0.01em] h-[0.38em]" />
      </Button>
    </div>
  )
}
