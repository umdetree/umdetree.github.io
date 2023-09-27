    (hd1,gpt2)/grub/grub.cfg
    (lvm/ubuntu--vg-ubuntu--lv)/boot # this is empty

    (hd1,gpt1)/efi/ubuntu/grub.cfg
    (hd1,gpt1)/efi/boot/

restart into grub, to boot:

    set root=(hd1,gpt2)
    set prefix=(hd1,gpt2)/grub
    insmod normal
    normal
