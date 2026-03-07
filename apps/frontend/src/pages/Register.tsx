import React from 'react';
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom'; // Para uma UX dinâmica pós-sucesso
import {
    Building2,
    MapPin,
    BarChart3,
    ArrowRight,
    Loader2, // Ícone de loading para o botão
    Mail,
    Phone,
    AlertCircle
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Importações dos seus contratos de dados e API
import { registerSchema, RegisterFormData, RegisterInput } from "../schemas/registerSchema";
import { registerCompany } from "../services/api";

export function RegistrationForm() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<RegisterInput>({
        // O 'as unknown as Resolver' resolve o conflito de String vs Array no TS
        resolver: zodResolver(registerSchema) as unknown as Resolver<RegisterInput>,
    });

    //Função disparada quando o formulário é válido
    const onSubmit = async (values: RegisterInput) => {
        // Cast para o formato que o backend Elysia espera (Array/Number)
        const data = values as unknown as RegisterFormData;

        toast.promise(registerCompany(data), {
            loading: 'Registrando empresa...',
            success: (res) => {
                reset();
                // UX Dinâmica: Após 2 segundos, volta para a home
                setTimeout(() => navigate('/'), 2000);
                return res.message || "Empresa registrada com sucesso!";
            },
            error: (err) => err.message || "Erro ao registrar empresa.",
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Header />

            <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-8 animate-slide-up">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Finalize seu{" "}
                            <span className="bg-gradient-entrepreneur bg-clip-text text-transparent">
                                Perfil Empreendedor
                            </span>
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                            <CardHeader className="bg-gradient-entrepreneur p-6 text-white">
                                <div className="flex items-center space-x-3">
                                    <Building2 className="w-6 h-6" />
                                    <CardTitle className="text-xl">Identificação Jurídica e Contato</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="nomeFundador">Nome do Sócio/Fundador</Label>
                                        <Input id="nomeFundador" {...register('nomeFundador')} placeholder="Nome completo" />
                                        {errors.nomeFundador && <p className="text-xs text-red-500 font-medium">{errors.nomeFundador.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cnpj">CNPJ</Label>
                                        <Input id="cnpj" {...register('cnpj')} placeholder="Apenas números" maxLength={14} />
                                        {errors.cnpj && <p className="text-xs text-red-500 font-medium">{errors.cnpj.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">E-mail Corporativo</Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <Input id="email" type="email" {...register('email')} className="pl-10" placeholder="exemplo@empresa.com.br" />
                                        </div>
                                        {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="telefone">Telefone/WhatsApp</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                                            <Input id="telefone" {...register('telefone')} className="pl-10" placeholder="(61) 99999-8888" />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-6 pt-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="naturezaJuridica">Natureza Jurídica</Label>
                                        <Input id="naturezaJuridica" {...register('naturezaJuridica')} placeholder="Ex: 206-2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="situacaoCadastral">Situação</Label>
                                        <Input id="situacaoCadastral" {...register('situacaoCadastral')} placeholder="Ex: ATIVA" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dataAbertura">Data de Abertura</Label>
                                        <Input id="dataAbertura" type="date" {...register('dataAbertura')} />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="razaoSocial">Razão Social</Label>
                                        <Input id="razaoSocial" {...register('razaoSocial')} placeholder="Razão Social completa" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="porte">Porte da Empresa</Label>
                                        <Input id="porte" {...register('porte')} placeholder="Ex: ME, EPP..." />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                            <CardHeader className="bg-gray-900 p-6 text-white">
                                <div className="flex items-center space-x-3">
                                    <MapPin className="w-6 h-6 text-entrepreneur-gold" />
                                    <CardTitle className="text-xl">Endereço da Sede</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 grid md:grid-cols-3 gap-6">
                                <div className="md:col-span-3 space-y-2">
                                    <Label htmlFor="logradouro">Logradouro</Label>
                                    <Input id="logradouro" {...register('logradouro')} placeholder="Rua, Avenida..." />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <Label htmlFor="bairro">Bairro</Label>
                                    <Input id="bairro" {...register('bairro')} placeholder="Bairro..." />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="numero">Número</Label>
                                    <Input id="numero" {...register('numero')} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cep">CEP</Label>
                                    <Input id="cep" {...register('cep')} maxLength={8} placeholder="00000000" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="municipio">Município</Label>
                                    <Input id="municipio" {...register('municipio')} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="uf">UF</Label>
                                    <Input id="uf" {...register('uf')} maxLength={2} className="uppercase" />
                                </div>
                            </CardContent>
                        </Card>


                        <Card className="border-0 shadow-xl rounded-3xl overflow-hidden">
                            <CardHeader className="bg-gradient-entrepreneur p-6 text-white">
                                <div className="flex items-center space-x-3">
                                    <BarChart3 className="w-6 h-6" />
                                    <CardTitle className="text-xl">Métricas e Desafios Atuais</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">


                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="cnaePrincipal">CNAE Principal</Label>
                                        <Input id="cnaePrincipal" {...register('cnaePrincipal')} placeholder="Código ou atividade" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="faturamentoAnual">Faturamento Anual (R$)</Label>
                                        <Input id="faturamentoAnual" type="number" {...register('faturamentoAnual', { valueAsNumber: true })} placeholder="0" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="funcDiretos">Funcionários Diretos</Label>
                                        <Input
                                            id="funcDiretos"
                                            type="number"
                                            min="0"
                                            {...register('funcDiretos', { valueAsNumber: true })}
                                            placeholder="Ex: 5"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="funcIndiretos">Funcionários Indiretos (Terceirizados)</Label>
                                        <Input
                                            id="funcIndiretos"
                                            type="number"
                                            min="0"
                                            {...register('funcIndiretos', { valueAsNumber: true })}
                                            placeholder="Ex: 2"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="cnaesSecundarios">CNAEs Secundários</Label>
                                    <Input id="cnaesSecundarios" {...register('cnaesSecundarios')} placeholder="Separe por vírgula" />
                                </div>

                                <div className="space-y-4 pt-2">
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Label htmlFor="historia">Sua História</Label>
                                            <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">Mín. 10 caracteres</span>
                                        </div>
                                        <Textarea id="historia" {...register('historia')} placeholder="Como você começou sua jornada?" className="min-h-[100px]" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <Label htmlFor="problemasLatentes" className="flex items-center gap-2">
                                                Desafios e Problemas Latentes <AlertCircle className="w-3 h-3 text-entrepreneur-gold" />
                                            </Label>
                                        </div>
                                        <Textarea
                                            id="problemasLatentes"
                                            {...register('problemasLatentes')}
                                            placeholder="Quais são as dores que tiram seu sono hoje?"
                                            className="min-h-[100px] border-orange-100 focus:border-entrepreneur-gold"
                                        />
                                        <p className="text-[10px] text-gray-400">Essas dores serão usadas pelo algoritmo para te conectar aos Clubes de Resolução.</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="flex items-center justify-end pt-6">
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="bg-gradient-entrepreneur hover:bg-gradient-entrepreneur-dark text-white px-16 py-8 text-xl rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                                        Validando Dados...
                                    </>
                                ) : (
                                    <>
                                        Concluir Cadastro
                                        <ArrowRight className="ml-3 w-6 h-6" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}