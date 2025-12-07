import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
    Request,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/properties')
export class PropertiesController {
    constructor(private propertiesService: PropertiesService) { }

    @Get()
    async findAll(
        @Query('location') location?: string,
        @Query('minPrice') minPrice?: string,
        @Query('maxPrice') maxPrice?: string,
        @Query('guests') guests?: string,
        @Query('category') category?: string,
    ) {
        return this.propertiesService.findAll({
            location,
            minPrice: minPrice ? parseFloat(minPrice) : undefined,
            maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
            guests: guests ? parseInt(guests) : undefined,
            category,
        });
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.propertiesService.findOne(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async create(@Request() req: any, @Body() createPropertyDto: any) {
        return this.propertiesService.create(req.user.id, createPropertyDto);
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(
        @Request() req: any,
        @Param('id') id: string,
        @Body() updatePropertyDto: any,
    ) {
        return this.propertiesService.update(id, req.user.id, updatePropertyDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async remove(@Request() req: any, @Param('id') id: string) {
        return this.propertiesService.remove(id, req.user.id);
    }
}
