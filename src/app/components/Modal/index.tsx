"use client";
import { Modal as AntdModal } from "antd";
import { useDisclosure } from "@/app/hooks/useDisclosure";
import { useRouter } from "next/navigation";

export default function Modal({ children }: React.PropsWithChildren<{}>) {
    const router = useRouter();

    const onCancel = () => {
        router.back();
    }

    return <AntdModal open={true} closeIcon={false} width={1200} onCancel={onCancel} footer={null}>
        {children}
    </AntdModal>
}